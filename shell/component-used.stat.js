const path = require('path');
const { htmlData } = require('./data');
const html2json = require('html2json').html2json;
const { getAllFiles, getFilterFiles, listComponents } = require('./tool/fileUtils');
const ObjectsToCsv = require('objects-to-csv');

(async function() {
  // 解析入口目录
  const entryDir = path.resolve(__dirname + '/../dist/pages')
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
      const childs = components.reduce((childAcc, { name, path }) => {
        return [...childAcc, {
          page: current,
          directory: currentDir,
          component: name,
          componentPath: path,
        }]
      }, [])
      return [...acc, ...childs]
    }
  }, [])

  // 导出csv文件
  const csv = new ObjectsToCsv(pageWithComponents)
  await csv.toDisk(__dirname + '/component_used_stat.csv')
})()