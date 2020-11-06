module.exports = {
  mallProject: {
    entry: '/dist/pages',
    exportFileName: '/component_status_stat.csv',
    imagesEntry: '/dist/images',
    targetEntrys: ['/dist/pages', '/dist/components'],
    imageReportPath: '/files_stat.csv'
  },
  rainbowProject: {
    monthcard: {
      entry: '/rainbow-mp/xinyu/monthcard/pages',
      exportFileName: '/rainbow_monthcard_stat.csv',
    },
    enterprise: {
      entry: '/rainbow-mp/xinyu/enterprise/pages',
      exportFileName: '/rainbow_enterprise_stat.csv',
      imagesEntry: '/rainbow-mp/xinyu/enterprise/images',
      targetEntrys: [
        '/rainbow-mp/xinyu/enterprise/pages', 
        '/rainbow-mp/xinyu/enterprise/components',
        '/rainbow-mp/xinyu/enterprise/templates',
      ],
      imageReportPath: '/rainbow_enterprise_images_stat.csv'
    }
  }
}