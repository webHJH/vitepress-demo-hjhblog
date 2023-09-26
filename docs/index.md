---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: 码上发财的博客
titleTemplate: 哟，您里边儿请～
editLink: true
lastUpdated: true

hero:
    name: 码上发财
    text: Stay foolish, Stay hungry.
    tagline: /佛系青年/人间清醒/CV工程师/
    image:
        # 首页右边的图片
        src: /logo.webp
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 个人成长
      link: /column/Growing/
# 按钮下方的描述
features:
  - icon: 👨
    title: Web前端
    details: CV工程师，国内某互联网工地搬砖。
    link: /column/views/guide
  - icon: 🍜
    title: 美食鉴赏
    details: 吃货一枚，有梦吃遍大江南北。
  - icon: 📿️
    title: 佛系青年
    details: 是个认真工作但是又很热爱生活的佛系青年。
---
<!-- 自定义组件 -->
<script setup>
import page from './.vitepress/components/home.vue';
</script>
<page/>
