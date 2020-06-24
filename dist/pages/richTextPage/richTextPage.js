const { doc } = require('./doc');

Page({
  data: {
    doc,
    htmlCode: `
      <h1>标题1</h1>
      <h2>标题2</h2>
      <h3>标题3</h3>
      <p style="color: red;">红色文本</p>
      <div>
      <span style="color: blue;">蓝色内联文本</span>
      </div>
    `
  }
})