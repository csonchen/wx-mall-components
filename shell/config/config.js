/**
 * entry: 作为分析的入口目录
 * export: 导出文件路径
 * sources: 需要分析的源文件目录
 */
module.exports = {
  image: {
    entry: '/dist/images',
    exportPath: '/shell/csv/images_stat.csv',
    sources: [
      '/dist/app.json',
      '/dist/pages', 
      '/dist/components',
    ]
  },
  component: {
    entry: '/dist/pages',
    exportPath: '/shell/csv/components_stat.csv'
  },
}