module.exports = {
  viewDoc: `
  <h1>使用：</h1>
  <table>
  <tr>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>例子</th>
  </tr>  
  <tr>
    <td>image</td>
    <td>图片</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>
  <tr>
    <td>name</td>
    <td>标题</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>
  <tr>
    <td>price</td>
    <td>价格</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>
  <tr>
    <td>marketPrice</td>
    <td>市场价</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>
  <tr>
    <td>num</td>
    <td>数量</td>
    <td>String</td>
    <td>default:<br /> 0</td>
  </tr>
  <tr>
    <td>properties</td>
    <td>商品规格</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>          
  </table>
  `,
  cardDoc: `
  <h1>使用：</h1>
  <table>
  <tr>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>例子</th>
  </tr>  
  <tr>
    <td>products</td>
    <td>商品列表</td>
    <td>Array</td>
    <td>default:<br /> []</td>
  </tr>
  <tr>
    <td>orderNo</td>
    <td>订单号</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>
  <tr>
    <td>orderTime</td>
    <td>下单时间</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>
  <tr>
    <td>orderStatusTitle</td>
    <td>订单状态文案</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>
  <tr>
    <td>orderStatus</td>
    <td>订单状态</td>
    <td>Number</td>
    <td>default:<br /> 0</td>
  </tr>        
  </table>
  <br />  
  `
}