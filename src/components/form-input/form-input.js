const LINK_TYPES = ['navigateTo', 'redirectTo']

Component({
  externalClasses: ['classname'],

  options: {
    multipleSlots: true
  },

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
    linkType: {
      type: String,
      value: '', //'navigateTo'
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
    titleColor: {
      type: String,
      value: '#323232'
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
    },
    fields: {
      type: Object,
      value: null,
    }
  },

  methods: {
    handleClick() {
      const { sortType } = e.target.dataset
      const { link, checkbox, linkType, sort } = this.data
      if (link) {
        if (LINK_TYPES.indexOf(linkType) > -1) {
          wx[linkType]({
            url: link
          }) 
        }
        this.triggerEvent('cellclick', link)
      }
      if (checkbox) {
        const checked = !this.data.checked
        this.setData({ 
          checked
        })
        this.triggerEvent('cellclick', { ...this.data.fields, checked })
      }
      if (sort && sortType) {
        this.triggerEvent('cellclick', { ...this.data.fields, sort: sortType })
      }
    },

    handleTitleClick() {
      this.triggerEvent('titleclick')
    }
  }
})