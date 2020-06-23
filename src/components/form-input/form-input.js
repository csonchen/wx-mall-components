Component({
  properties: {
    input: {
      type: Boolean,
      value: false
    },
    link: {
      type: String,
      value: ''
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
  },

  methods: {
    handleClick() {
      const { link } = this.data
      if (link) {
        console.log('你点击我了：' + link)
        this.triggerEvent('cellclick', link)
      }
    }
  }
})