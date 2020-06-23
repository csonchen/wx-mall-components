Component({
  options: {
    multipleSlots: true
  },

  properties: {
    showPage: {
      type: Boolean,
      value: false
    },
    list: {
      type: Array,
      value: [
        { value: '卡片1' },
        { value: '卡片2' },
        { value: '卡片3' },
        { value: '卡片4' },
        { value: '卡片5' },
      ]
    },
    type: {
      type: String,
      value: 'flat' // flat: 平面滑动；scale：放大滑动
    },
    custom: {
      type: Boolean,
      value: false,
    }
  },

  data: {
    current: 0,
  },

  methods: {
    handleChange({ detail: { current } }) {
      this.setData({ current })
    }
  }
})