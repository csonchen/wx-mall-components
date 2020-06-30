Component({
  properties: {
    default: {
      type: 'String',
      value: '排序'
    },
    showPanel: {
      type: Boolean,
      value: false,
    },
    tabs: {
      type: Array,
      value: [],
    },
    options: {
      type: Array,
      value: []
    }
  },

  data: {
    defaultSelect: false,
  },

  methods: {
    togglePanel(e) {
      const tabs = this.data.tabs.map(item => {
        item.select = false
        return item
      })
      const { showPanel } = this.data
      this.setData({
        tabs,
        defaultSelect: true,
        showPanel: !showPanel,
      })
    }, 

    toggleTab(e) {
      const current = e.currentTarget.dataset.index
      const tabs = this.data.tabs.map((item, index) => {
        item.select = index === +current
        return item
      })
      this.setData({
        tabs,
        defaultSelect: false,
        showPanel: false,
      })
    },

    toggleOption(e) {
      const current = e.currentTarget.dataset.index
      const { showPanel, options } = this.data

      const newOptions = options.map((item, index) => {
        item.select = index === current
        return item
      })
      this.setData({
        showPanel: !showPanel,
        options: newOptions,
      })
    }
  }
})