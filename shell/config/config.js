module.exports = {
  mallProject: {
    entry: '/dist/pages',
    exportFileName: '/component_status_stat.csv',
    imagesEntry: '/dist/images',
    imageReportPath: '/files_stat.csv',
    targetEntrys: [
      '/dist/app.json',
      '/dist/pages', 
      '/dist/components'
    ],
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
      imageReportPath: '/rainbow_enterprise_images_stat.csv',
      targetEntrys: [
        '/rainbow-mp/xinyu/enterprise/pages', 
        '/rainbow-mp/xinyu/enterprise/components',
        '/rainbow-mp/xinyu/enterprise/templates',
      ],
    },
    public: {
      imagesEntry: '/rainbow-mp/xinyu/public/images',
      imageReportPath: '/rainbow_public_images_stat.csv',
      targetEntrys: [
        '/rainbow-mp/xinyu/app.json',
        '/rainbow-mp/xinyu/coupon/pages',
        '/rainbow-mp/xinyu/coupon/components',
        '/rainbow-mp/xinyu/daojia/pages',
        '/rainbow-mp/xinyu/daojia/component',
        '/rainbow-mp/xinyu/deptstore/pages',
        '/rainbow-mp/xinyu/deptstore/components',
        '/rainbow-mp/xinyu/enterprise/pages',
        '/rainbow-mp/xinyu/enterprise/components',
        '/rainbow-mp/xinyu/enterprise-operate/pages',
        '/rainbow-mp/xinyu/enterprise-operate/components',
        '/rainbow-mp/xinyu/group/pages',
        '/rainbow-mp/xinyu/group/components',
        '/rainbow-mp/xinyu/index/pages',
        '/rainbow-mp/xinyu/index/components',
        '/rainbow-mp/xinyu/integration/pages',
        '/rainbow-mp/xinyu/integration/components',
        '/rainbow-mp/xinyu/largeScreen/pages',
        '/rainbow-mp/xinyu/monthcard/pages',
        '/rainbow-mp/xinyu/monthcard/components',
        '/rainbow-mp/xinyu/osc/pages',
        '/rainbow-mp/xinyu/parking/pages',
        '/rainbow-mp/xinyu/pintuan/pages',
        '/rainbow-mp/xinyu/pintuan/components',
        '/rainbow-mp/xinyu/presell/pages',
        '/rainbow-mp/xinyu/public/pages',
        '/rainbow-mp/xinyu/public/components',
        '/rainbow-mp/xinyu/rainbowpay/pages',
        '/rainbow-mp/xinyu/selfcashiers/pages',
        '/rainbow-mp/xinyu/selfcashiers/components',
        '/rainbow-mp/xinyu/shopping/pages',
        '/rainbow-mp/xinyu/shopping/components',
      ]
    }
  }
}