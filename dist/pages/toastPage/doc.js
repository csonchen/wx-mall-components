module.exports = {
  doc: `
  <h1>使用：</h1>
  <table>
  <tr>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>例子</th>
  </tr>
  <tr>
    <td>show</td>
    <td>是否显示弹窗</td>
    <td>Boolean</td>
    <td>default:<br /> false</td>
  </tr>
  <tr>
    <td>duration</td>
    <td>弹窗展示时间（ms）</td>
    <td>Number</td>
    <td>default:<br /> 1500</td>
  </tr>
  <tr>
    <td>tips</td>
    <td>提示语</td>
    <td>String</td>
    <td>default:<br /> "操作成功"</td>
  </tr>
  <tr>
    <td>image</td>
    <td>展示语icon</td>
    <td>String</td>
    <td>default:<br /> ""</td>
  </tr>
  <tr>
    <td>mask</td>
    <td>背景蒙层</td>
    <td>Boolean</td>
    <td>default:<br /> true</td>
  </tr>
  <tr>
    <td>type</td>
    <td>弹窗类型</td>
    <td>String</td>
    <td>
      default:<br /> 'success' <br/>
      options:<br />
      'success'||'warn'
    </td>
  </tr>
  <tr>
    <td>imageStyle</td>
    <td>icon样式</td>
    <td>String</td>
    <td>default:<br /> ''</td>
  </tr>
  <tr>
    <td>showLoading</td>
    <td>提示语下方出现加载小点</td>
    <td>Boolean</td>
    <td>default:<br /> false</td>
  </tr>             
  </table>
  <br />
  `
}