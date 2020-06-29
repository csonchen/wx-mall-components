Component({
  externalClasses: ['classname'],

  properties: {
    image: String,
    name: String,
    price: String,
    marketPrice: String,
    num: Number,
    prop: Object,
    skuText: {
      type: String,
      value: '',
      observer(newVal, oldVal) {
        if (newVal && typeof newVal === 'string') {
          const skuList = newVal.split(';')
          this.setData({ skuList })
        }
      }
    }
  }
})