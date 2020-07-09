Component({
  externalClasses: ['classname'],

  properties: {
    product: {
      type: Object,
      value: null,
      observer(val) {
        if (val) {
          this.updateGrids(val)
          this.parsePrice(val)
        }
      }
    },

    grids: {
      type: Array,
      value: [
        {title: '-', tips: '总库存'},
        {title: '-', tips: '累计销量'},
        {title: '-', tips: '近30日销量'},
      ]
    }
  },

  methods: {
    updateGrids({ totalSoldCount = 0, totalStock = 0, recentSoldCount = 0 }) {
      this.setData({
        grids: [
          { title: totalStock, tips: '总库存' },
          { title: totalSoldCount, tips: '累计销量' },
          { title: recentSoldCount, tips: '近30日销量' },
        ]
      })
    },

    parsePrice({ minSalePrice, maxSalePrice }) {
      const minSales = minSalePrice.toString().split('.')
      const maxSales = maxSalePrice.toString().split('.')
      this.setData({
        minSaleMain: minSales[0],
        minSaleSub: minSales.length > 1 ? minSales[1] : '',
        maxSaleMain: maxSales[0],
        maxSaleSub: maxSales.length > 1 ? maxSales[1] : '',
      })
    }
  }
})