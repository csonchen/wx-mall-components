const { doc } = require('./doc');

Page({
  data: {
    doc,
    tabs: [
      {
        value: '全部商品',
        select: false
      },
      {
        value: '全部品牌',
        select: false
      }
    ],
    tabOptions: [
      {
        id: 1,
        value: '全部商品',
        select: true
      },
      {
        id: 2,
        value: '上架商品',
        select: false
      }
    ]
  }
})