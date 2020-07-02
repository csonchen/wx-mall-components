Component({
  properties: {
    placeholder: {
      type: String,
      value: ''
    }
  },

  data: {
    formats: {},
    isIOS: false,
    keyboardHeight: 0,
    showDrawPanel: false,
    colors: ['#323232', '#fe473c', '#26a4ec', '#1bb72e', '#c73277', '#fba72b']
  },

  attached() {
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({ isIOS })
    this.updatePosition(0)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return

      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success: () => {
            this.updatePosition(keyboardHeight)
            this.editorCtx.scrollIntoView()
          }
        })
      }, duration)
    })
  },

  methods: {
    onStatusChange(e) {
      const formats = e.detail
      this.setData({ formats })
    },

    onEditorReady() {
      this.createSelectorQuery().select('#editor').context(res => {
        this.editorCtx = res.context
      }).exec()
    },

    updatePosition(keyboardHeight) {
      const toolbarHeight = 50
      const { windowHeight, platform } = wx.getSystemInfoSync()
      let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
      this.setData({ 
        editorHeight,
        keyboardHeight,
      })
    },

    toggleDrawPanel() {
      this.setData({ showDrawPanel: !this.data.showDrawPanel })
    },

    format(e) {
      let { name, value } = e.target.dataset
      if (!name) return
      this.editorCtx.format(name, value)
    },

    insertImage() {
      wx.chooseImage({
        count: 1,
        success: (res) => {
          this.editorCtx.insertImage({
            src: res.tempFilePaths[0],
            data:{
              id:'abcd',
              role: 'god'
            },
            width: '80%',
            success: () => {
              console.log('inert image success')
            }
          })
        }
      })
    }
  }
})