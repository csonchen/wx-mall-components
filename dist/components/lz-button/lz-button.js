Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'default',  // default: 白底黑字  red: 红底白字, blue: 蓝底白字, orange: 橘色白字, main: 主题色
    },

    ghost: {
      type: Boolean,
      value: false,
    },

    label: {
      type: String,
      value: '',
    },

    // default: 30px, small 24px little 20px large 40px big 48px
    size: {
      type: String,
      value: 'default',   
    },

    disabled: {
      type: Boolean,
      value: false,
      observer: "changeDisabled",
    },

    fixedWidth: {
      type: Boolean,
      value: false,
    },

    fixedBorder: {
      type: Boolean,
      value: true,
    },

    styleName: {
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    className: 'lz-btn',
  },

  attached () {
    const { type, size, ghost = false, disabled = false, fixedWidth = false, fixedBorder = true } = this.properties
    let className = 'lz-btn'

    switch (type) {
      case 'red':
        className = className + ' lz-btn-red'
        break
      case 'blue':
        className = className + ' lz-btn-blue'
        break
      case 'orange':
        className = className + ' lz-btn-orange'
        break
      case 'gray':
        className = className + ' lz-btn-gray'
        break
      case 'redGray':
        className = className + ' lz-btn-redGray'
        break
      default:
        break
    }

    if (ghost) {
      className = className + ' lz-btn-ghost'
    }

    switch(size) {
      case 'default':
        break
      case 'little':
        className = className + ' lz-btn-little'
        break
      case 'small':
        className = className + ' lz-btn-sm'
        break
      case 'large':
        className = className + ' lz-btn-large'
         break
      case 'big':
        className = className + ' lz-btn-big'
        break  
      default:
        break
    }

    if (disabled) {
      className = className + ' lz-btn-disabled'
    }

    if (fixedWidth) {
      className = className + ' lz-btn-min-width'
    }

    if (fixedBorder === false) {
      className = className + ' lz-btn-no-border'
    }
    
    this.setData({
      className,
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击事件
    handleToggle() {
      const { disabled = false } = this.properties

      if (disabled) return 

      this.triggerEvent('onClick')
    },

    changeDisabled () {
      const { className } = this.data
      const { disabled } = this.properties
      let nextClassName = className
      switch (disabled) {
        case true: 
          if (nextClassName.indexOf('lz-btn-disabled') == -1) {
            nextClassName = nextClassName + ' lz-btn-disabled'
          }
          break;
        case false:
          if (nextClassName.indexOf('lz-btn-disabled') != -1) {
            nextClassName = nextClassName.replace(' lz-btn-disabled', '');
          }
          break;
      }
      this.setData({
        className: nextClassName,
      })
    }
  }
})
