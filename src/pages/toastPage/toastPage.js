const { doc } = require("./doc");

Page({
  data: {
    show: false,
    tips: "",
    type: "success",
    doc: doc,
  },

  showEditToast() {
    this.setData({ show: true, tips: "修改成功", type: "success", showLoading: false })
  },

  showLoadingToast() {
    this.setData({ show: true, tips: "加载中", type: "loading", showLoading: true })
  },

  showDelToast() {
    this.setData({ show: true, tips: "删除失败", type: "warn", showLoading: false  })
  }
})