const SkinModel = require('../model/SkinModel');

module.exports = Behavior({
  data: {
    vi: {}
  },

  attached() {
    this.setData({ 
      vi: SkinModel.getSkin()
    })
  }
})