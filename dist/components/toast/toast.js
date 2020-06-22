
Component({
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        const {duration} = this.data
        if (newVal) {
          setTimeout(() => {
            this.hide()
          }, duration)
        }
      }
    },
    duration: {
      type: Number,
      value: 1500
    },
    tips: {
      type: String,
      value: '操作成功'
    },
    image: {
      type: String,
      value: ''
    },
    mask: {
      type: Boolean,
      value: true,
    },
    type: {
      type: String,
      value: 'success' // 可选: success / warn / none
    },
    imageStyle: {
      type: String,
      value: ''
    },
    showLoading: {
      type: Boolean,
      value: false
    },
  },

  methods: {
    show(obj) {
      const { 
        image = '', 
        tips = '操作成功', 
        mask = true, 
        duration = 1500, 
        type = 'success',
        callback = null,
        imageStyle = '',
        showLoading = false,
      } = obj || {}

      this.setData({
        image,
        tips,
        mask,
        duration,
        type,
        show: true,
        imageStyle,
        showLoading,
      }, () => {
        setTimeout(() => {
          this.hide()
          callback && callback()
        }, duration)
      })
    },

    hide() {
      this.setData({ show: false })
      this.triggerEvent('callback')
    }
  }
})