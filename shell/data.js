const htmlData = `
  <view class="page">
    <view class="page__hd">
      <view class="page__title">card-swiper</view>
      <view class="page__desc">卡片滑动门交互展示效果</view>
    </view>
    <view>
      <view>
        <view class="page__bd mb15 bold">1. 平面滑动</view>
        <card-swiper showPage="showPage"></card-swiper>
      </view>
      <view class="mt15"> 
        <view class="page__bd mb15 bold">2. 大小动画滑动</view>
        <card-swiper type="scale"></card-swiper>
      </view>
    </view>
    <view class="page__bd page__bd_spacing">
      <view class="mt15">
        <wxParse nodes="{{doc}}" language="html">   </wxParse>
      </view>
    </view>
  </view>
`

module.exports = {
  htmlData,
}