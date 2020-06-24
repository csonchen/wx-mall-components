Component({
  properties: {
    showPanel: {
      type: Boolean,
      value: false
    },
    tabs: {
      type: Array,
      value: []
    },
    options: {
      type: Array,
      value: []
    }
  },

  methods: {
    togglePanel(e) {
      const current = e.currentTarget.dataset.index
      const { showPanel, tabs } = this.data
      this.tabCurrent = current

      this.setData({ 
        showPanel: !showPanel,
        [`tabs[${current}].select`]: !showPanel
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
        [`tabs[${this.tabCurrent}].select`]: !showPanel,
      })
    }
  }
})