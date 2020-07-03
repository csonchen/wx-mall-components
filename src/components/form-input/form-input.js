Component({
  externalClasses: ['classname'],

  properties: {
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
    checkbox: {
      type: Boolean,
      value: false,
    },
    checked: {
      type: Boolean,
      value: false,
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