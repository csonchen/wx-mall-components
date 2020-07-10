Page({
  data: {
    shop: {
      base: true,
      mutual: false,
      form: false,
      business: false,
    },
    baseData: [
      { value: '搜索框', link: '/pages/searchPage/searchPage' },
      { value: '提示语弹出框', link: '/pages/toastPage/toastPage' },
      { value: '提示语状态栏', link: '/pages/toptipsPage/toptipsPage' },
      { value: '下拉选择器', link: '/pages/dropdownSelectPage/dropdownSelectPage' },
      { value: '下拉选择+选项卡组合器', link: '/pages/selectTabPage/selectTabPage' },
      { value: 'grid格子布局', link: '/pages/gridPage/gridPage' },
      { value: '按钮', link: '/pages/lzButtonPage/lzButtonPage' },
    ],
    mutualData: [
      { value: '卡片滑动交互', link: '/pages/cardSwiperPage/cardSwiperPage' },
      { value: '富文本解析展示', link: '/pages/richTextPage/richTextPage' },
      { value: '富文本编辑器', link: '/pages/richEditorPage/richEditorPage' },
      { value: '日期选择器', link: '/pages/datePickerPage/datePickerPage' },
      { value: '目录类型组件', link: '/pages/directoryPage/directoryPage' }
    ],
    formData: [
      { value: '输入框', link: '/pages/inputPage/inputPage' }
    ],
    businessData: [
      { value: '订单图文列表', link: "/pages/orderPicinfoviewPage/orderPicinfoviewPage" },
      { value: '商品库商品信息视图', link: "/pages/productPicinfoviewPage/productPicinfoviewPage" },
    ]
  },

  togglePanel(e) {
    const { type } = e.currentTarget.dataset

    const target = this.data.shop[`${type}`]
    this.data.shop[`${type}`] = !target

    this.setData({
      shop: this.data.shop
    })
  }
})
