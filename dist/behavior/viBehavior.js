const SkinModel = require('../model/SkinModel');

module.exports = Behavior({
  data: {
    vi: {}
  },

  attached() {
    const { main: mainColor, sub: secondaryColor } = SkinModel.getSkin()
    this.setData({ 
      vi: {
        theme: {
          mainColor,
          secondaryColor,
        }
      }
    })
  }
})