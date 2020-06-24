# wx-mall-components
微信小程序商城组件库

## 启动

```bash
# 安装&开发阶段

npm install (cnpm install)

npm run start

# 小程序调试阶段

打开“小程序开发者工具”，选择“导入项目”，选中 dist 目录
```

## 结构

    wx-mall-components 微信小程序商城组件库

    ./dist  # 编译后的小程序文件目录存放路径

    ./src
    ├── app.js
    ├── app.json
    ├── app.styl
    ├── components  # 组件存放路径
    │   ├── card-swiper
    │   │   ├── card-swiper.js
    │   │   ├── card-swiper.json
    │   │   ├── card-swiper.pug
    │   │   └── card-swiper.styl
    │   ├── date-picker
    │   ├── dropdown-select
    │   ├── form-input
    │   ├── search
    │   └── toast
    ├── images
    ├── node_modules
    ├── package.json
    ├── pages  # 页面存放路径
    │   ├── cardSwiperPage
    │   │   ├── cardSwiperPage.js
    │   │   ├── cardSwiperPage.json
    │   │   ├── cardSwiperPage.pug
    │   │   ├── cardSwiperPage.styl
    │   │   └── doc.js   # 组件说明文档
    │   ├── datePickerPage
    │   ├── dropdownSelectPage
    │   ├── index
    │   ├── inputPage
    │   ├── richTextPage
    │   ├── searchPage
    │   └── toastPage
    ├── sitemap.json
    ├── styles  # 公用样式
    │   ├── define.styl
    │   ├── flex.styl
    │   ├── framework.styl
    │   ├── normal.styl
    │   └── plugin.styl
    └── templates  # 公用模板文件
        └── pageHead.pug