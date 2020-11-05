const path = require('path');
const { isWxmlImportComponent } = require('./tool/parseUtils');
const { getAllFiles, getFilterFiles, listComponents, getFileJsonData } = require('./tool/fileUtils');
const ObjectsToCsv = require('objects-to-csv');
const { mallProject: { entry, exportFileName } } = require('./config/config');

(async function() {
  // 解析入口目录
  const entryDir = path.resolve(__dirname + '/..' + entry)
  const allFiles = getAllFiles(entryDir)

  if (allFiles.length === 0) return

  const filterFiles = getFilterFiles(allFiles, ['wxml', 'json'])

  // 组装导出对象数组数据
  const pageWithComponents = filterFiles.reduce((acc, { jsonFile }) => {
    const current = path.basename(jsonFile, '.json')
    const currentDir = path.dirname(jsonFile)
    const components = listComponents(jsonFile) || []

    if (components.length == 0) {
      return [...acc, { 
        page: current, 
        directory: currentDir,
      }]
    } else {
      // 输入wxml地址，转化为json标签对象
      const fileJsonData = getFileJsonData(currentDir + `/${current}.wxml`)
      const childs = components.reduce((childAcc, { name, path }) => {
        const used = isWxmlImportComponent(fileJsonData, name)
        return [...childAcc, {
          page: current,
          directory: currentDir,
          component: name,
          componentPath: path,
          used: used ? 'true' : 'false',
        }]
      }, [])
      return [...acc, ...childs]
    }
  }, [])

  // 导出csv文件
  const csv = new ObjectsToCsv(pageWithComponents)
  await csv.toDisk(__dirname + exportFileName)
})()