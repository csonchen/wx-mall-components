/**
 * 判断当前页面是否引入该组件标签
 * @param {*} pageJsonData 
 * @param {*} tagName 
 */
const isWxmlImportComponent = (pageJsonData, tagName) => {
  if (!pageJsonData.child) return false
  
  tagName = tagName.toLowerCase()
  for (let item of pageJsonData.child) {
    // 判断标签名是否一致
    if (item.tag === tagName) {
      return true
    }

    // 递归判断子节点的标签
    if (item.child) {
      const flag = isWxmlImportComponent(item, tagName)
      if (flag) {
        return true
      }
    }
  }
  return false
}

module.exports = {
  isWxmlImportComponent,
}