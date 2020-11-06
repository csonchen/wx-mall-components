const path = require('path');
const fs = require('fs');
const { rainbowProject: { 
  enterprise: { imagesEntry, targetEntrys, imageReportPath } 
}} = require('./config/config');
const { getAllFiles } = require('./tool/fileUtils');
const ObjectsToCsv = require('objects-to-csv');

(async () => {
  // 需要分析的图片目录地址
  const imgDirPath = path.resolve(__dirname + '/..' + imagesEntry);
  const imgFiles = getAllFiles(imgDirPath)

  if (imgFiles.length === 0) return

  // 只保留图片的文件名数组
  const allImageFiles = imgFiles.map(imgItem => path.basename(imgItem))
  // 查找所有的wxml文件
  const allWxmlFiles = targetEntrys.reduce((acc, targetEntry) => {
    const targetDirPath = path.resolve(__dirname + '/..' + targetEntry)
    const targetAllFiles = getAllFiles(targetDirPath)
    const allWxmlFiles = targetAllFiles.filter(fileStr => fileStr.indexOf('.wxml') > -1)
    return [...acc, ...allWxmlFiles]
  }, [])
  // 遍历图片集数组，查找wxml文件是否有引入
  const result = allImageFiles.reduce((acc, imgName) => {
    const rowItems = allWxmlFiles.reduce((childAcc, filePath) => {
      const fileStr = fs.readFileSync(filePath, 'utf8')
      return fileStr.indexOf(imgName) === -1 ? childAcc : [...childAcc, {
        image: imgName,
        existPath: filePath,
      }]
    }, [])
    // 如果查找完毕为空，则说明没有引入到该图片
    return rowItems.length === 0 ? [...acc, {
      image: imgName,
      existPath: '没有用到'
    }] : [...acc, ...rowItems]
  }, [])

  // 导出csv文件
  const csv = new ObjectsToCsv(result)
  await csv.toDisk(__dirname + '/rainbow-csv/' + imageReportPath)
})();