const SkinModel = require('../../model/SkinModel');

Component({
  properties: {
    skins: {
      type: Array,
      value: [
        { main: 'rgb(254, 71, 60)', sub: 'rgb(255, 184, 0)'},
        { main: 'rgb(255, 158, 0)', sub: 'rgb(69, 69, 69)'},
        { main: 'rgb(2, 200, 8)', sub: 'rgb(69, 69, 69)'},
        { main: 'rgb(19, 119, 255)', sub: 'rgb(69, 69, 69)'},
        { main: 'rgb(255, 102, 146)', sub: 'rgb(255, 183, 91)'},
        { main: 'rgb(99, 103, 240)', sub: 'rgb(69, 69, 69)'},
        { main: 'rgb(215, 183, 130)', sub: 'rgb(207, 197, 174)'},
      ]
    }
  },

  methods: {
    handleSelect(e) {
      const { index } = e.currentTarget.dataset
      const target = this.data.skins[index]
      // 设置皮肤
      SkinModel.setSkin(target)
      this.setData({ current: index })
    }
  }
})