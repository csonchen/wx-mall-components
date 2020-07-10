Component({
  properties: {
    operateBtn: String,
    specs: {
      type: Array,
      value: [
        {
          id: 1,
          specName: '自定义',
          children: [
            {
              id: 2,
              parentId: 1,
              spceName: '自定义1',
            },
            {
              id: 3,
              parentId: 1,
              spceName: '自定义2',
            },
            {
              id: 4,
              parentId: 1,
              spceName: '自定义3',
            }
          ]
        },
        {
          id: 5,
          specName: '白色',
          children: [
            {
              id: 7,
              parentId: 5,
              spceName: '白色1',
            },
            {
              id: 8,
              parentId: 5,
              spceName: '白色2',
            },
            {
              id: 9,
              parentId: 5,
              spceName: '白色3',
            }
          ]
        },
        {
          id: 10,
          specName: '蓝色',
          children: [
            {
              id: 11,
              parentId: 10,
              spceName: '蓝色1',
            },
            {
              id: 12,
              parentId: 10,
              spceName: '蓝色2',
            },
            {
              id: 13,
              parentId: 10,
              spceName: '蓝色3',
            }
          ]
        }
      ]
    },
  },

  data: {
    current: 0,
    cons: [],
  },

  methods: {
    selectSide(e) {
      const { specs } = this.data
      const { current, id } = e.currentTarget.dataset
      const cons = specs.find(item => item.id == id )['children']

      this.setData({ 
        current,
        cons,
      })
    },

    selectCon(e) {
      const { current, specs } = this.data
      const { id, current: conCurr } = e.currentTarget.dataset
      // 标志选中
      const flag = specs[current].children[conCurr].selected
      specs[current].children[conCurr].selected = !flag

      this.setData({ 
        currentCon: id,
        specs,
        cons: specs[current].children,
      })
    }
  }
})