const { viewDoc, cardDoc } = require('./doc');

Page({
  data: {
    viewDoc,
    cardDoc,
    products: [
      {
        image: "",
        name: "我是标题",
        price: "100",
        marketPrice: "488.9",
        num: 10,
        skuText: "颜色：黑色  尺寸：M"
      },
      {
        image: "",
        name: "我是标题2",
        price: "200",
        marketPrice: "488.9",
        num: 20,
        skuText: "颜色：黑色  尺寸：M"
      }
    ]
  }
})