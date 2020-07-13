Component({
  externalClasses: ['classname'],

  properties: {
    type: {
      type: String,
      value: '', // sort || input || link || checkbox
    },
    topHalfRadius: {
      type: Boolean,
      value: false,
    },
    bottomHalfRadius: {
      type: Boolean,
      value: false,
    },
    input: {
      type: Boolean,
      value: false
    },
    link: {
      type: String,
      value: ''
    },
    radio: {
      type: Boolean,
      value: false,
    },
    placeholder: {
      type: String,
      value: '请输入'
    },
    title: {
      type: String,
      value: ''
    },
    foot: {
      type: String,
      value: ''
    },
    footColor: {
      type: String,
      value: '#999',
    },
    checkbox: {
      type: Boolean,
      value: false,
    },
    checked: {
      type: Boolean,
      value: false,
    },
    sort: {
      type: String,
      value: '', // up || down || all
    }
  },

  methods: {
    handleClick() {
      const { link, checkbox } = this.data
      if (link) {
        console.log('你点击我了：' + link)
        this.triggerEvent('cellclick', link)
      }
      if (checkbox) {
        this.setData({ 
          checked: !this.data.checked
        })
      }
    }
  }
})