const fs = require('fs');
const path = require('path');
const ObjectsToCsv = require('objects-to-csv');

const dirname = path.resolve()

/**
 * 获取目录下的所有文件名
 * @param {*} directory 
 */
function getAllFiles(directory) {
  let result = []
  const files = fs.readdirSync(directory)
  for (let item of files) {
    const path = directory + '/' + item
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
 * 统计文件用引用的组件及其路径
 * @param {*} jsonFile 
 * @param {*} jsFile 
 */
function statComponents(jsonFile, jsFile) {
  if (!jsonFile || !jsFile) return

  const jsonDataStr = fs.readFileSync(jsonFile)
  const jsonData = JSON.parse(jsonDataStr)
  const result = []

  if (jsonData) {
    const { usingComponents } = jsonData
    const componentList= []

    for (let key in usingComponents) {
      componentList.push({
        name: key,
        path: usingComponents[key]
      })
    }

    result.push({
      file: jsFile,
      components: componentList
    })
  }
  return result
}

/**
 * 获取当前路径的文件名及其后缀
 * @param {*} filePath 
 */
function getFileName(filePath) {
  const fileSplits = filePath.split('/')
  if (fileSplits.length > 0) {
    const [filename, dst] = fileSplits[fileSplits.length - 1].split('.')
    return [filename, dst]
  }
}

/**
 * 过滤出需要统计的js及其同名的json文件 [{jsFile: xx, jsonFile: yy}]
 * @param {*} allFiles 
 */
function getFilterFiles(allFiles) {
  const filterFiles = []
  for (let begin = 0, len = allFiles.length; begin < len; begin++) {
    const filePath = allFiles[begin]
    const [filename, dst] = getFileName(filePath)

    if (!['json', 'js'].includes(dst)) {
      continue
    }

    for (let j = begin + 1; j < len; j++) {
      const mapFilePath = allFiles[j]
      const [mapFilename, mapDst] = getFileName(mapFilePath)

      if (filename === mapFilename && ['json', 'js'].includes(mapDst)) {
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

async function start() {
  // 设置需要分析的page页面文件目录
  const baseDir = dirname + '/dist/pages'
  const allFiles = await getAllFiles(baseDir)

  if (allFiles.length === 0) return

  // 过滤出需要统计的js及其同名的json文件 [{jsFile: xx, jsonFile: yy}]
  const filterFiles = getFilterFiles(allFiles)

  // 统计引入的组件
  const components = filterFiles.reduce((acc, { jsonFile, jsFile }) => {
    const fileComponents = statComponents(jsonFile, jsFile)
    return fileComponents ? [...acc, ...fileComponents] : acc
  }, [])

  // 导出csv文件
  const csv = new ObjectsToCsv(components)
  await csv.toDisk(dirname + '/shell/component_stat.csv')
}

// begin
start()