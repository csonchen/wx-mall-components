const fs = require('fs');
const html2json = require('html2json').html2json;

/**
 * 获取路径下的所有文件名
 * @param {*} pathUrl 
 * @param {*} checkFiletype 检查文件类型
 */
const getAllFiles = (pathUrl, checkFiletype = false) => {
  let result = []

  // 需要检查文件类型，并且是文件，直接返回单文件数组
  if (checkFiletype && fs.statSync(pathUrl).isFile()) {
    return [pathUrl]
  }

  // 目录类型则递归往下查找
  const files = fs.readdirSync(pathUrl)
  for (let item of files) {
    const path = pathUrl + '/' + item
    const isDir = fs.statSync(path).isDirectory()
    if (isDir) {
      result = [...result, ...getAllFiles(path)]
    } else {
      result.push(path)
    }
  }
  return result
}

/**
 * 获取当前路径的文件名及其后缀
 * @param {*} filePath 
 */
const getFileName = (filePath) => {
  const fileSplits = filePath.split('/')
  if (fileSplits.length > 0) {
    const [filename, dst] = fileSplits[fileSplits.length - 1].split('.')
    return [filename, dst]
  }
}

/**
 * 过滤出需要统计的文件数组
 * @param {*} allFiles 需要过滤的文件数组
 * @param {*} fileTypes 需要过滤的文件类型
 */
const getFilterFiles = (allFiles, fileTypes) => {
  const filterFiles = []
  for (let begin = 0, len = allFiles.length; begin < len; begin++) {
    const filePath = allFiles[begin]
    const [filename, dst] = getFileName(filePath)

    // 不是需要过滤的文件类型，这跳转下次循环
    if (!fileTypes.includes(dst)) {
      continue
    }

    for (let j = begin + 1; j < len; j++) {
      const mapFilePath = allFiles[j]
      const [mapFilename, mapDst] = getFileName(mapFilePath)

      if (filename === mapFilename && fileTypes.includes(mapDst)) {
        filterFiles.push({
          [`${dst}File`]: filePath,
          [`${mapDst}File`]: mapFilePath,
        })
        break;
      }
    }
  }
  return filterFiles
}

/**
 * 统计json文件引入到的组件数组
 * @param {*} jsonFile 
 */
const listComponents = (jsonFile) => {
  if (!jsonFile) return

  const jsonDataStr = fs.readFileSync(jsonFile)
  const jsonData = JSON.parse(jsonDataStr)
  const componentList = []

  if (jsonData) {
    const { usingComponents } = jsonData

    for (let key in usingComponents) {
      componentList.push({
        name: key, 
        path: usingComponents[key]
      })
    }
  }
  return componentList
}

/**
 * 获取wxml文件的js表示对象
 * @param {*} filePath 
 */
const getFileJsonData = (filePath) => {
  try {
    const fileStr = fs.readFileSync(filePath, 'utf8')
    const fileJsonData = html2json(fileStr)
    return fileJsonData || {}
  } catch (error) {
    console.log(filePath + '解析有误，没有成功导出')
    return null
  }
}

module.exports = {
  getFileName,
  getFilterFiles,
  getAllFiles,
  listComponents,
  getFileJsonData,
}