const viBehavior = require('../../behavior/viBehavior');

Component({
  behaviors: [viBehavior],

  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  attached() {
    console.log(this.data)
  }
})