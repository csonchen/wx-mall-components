const { doc } = require('./doc');

Page({
  data: {
    doc,
    tabs: [
      {
        value: '已上架(99)',
        select: false,
      },
      {
        value: '下架(88)',
        select: false,
      },
      {
        value: '已售罄(10)',
        select: false,
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