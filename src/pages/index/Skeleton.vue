<!--
此文件为开发者工具生成，生成时间: 2023/11/6下午10:00:37
使用方法：
在 D:\uni_shop\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\uni_shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view is="components/CustomNavbar">
        <view class="navbar CustomNavbar--navbar" style="padding-top: 44px">
          <view class="logo CustomNavbar--logo">
            <image class="logo-image CustomNavbar--logo-image sk-image"></image>
            <text class="logo-text CustomNavbar--logo-text sk-transparent sk-text-3-3333-463 sk-text">新鲜 · 亲民 · 快捷</text>
          </view>
          <view class="search CustomNavbar--search">
            <text
              class="icon-search CustomNavbar--icon-search sk-transparent sk-text-14-2857-661 sk-text sk-pseudo sk-pseudo-circle">搜索商品</text>
            <text class="icon-scan CustomNavbar--icon-scan sk-pseudo sk-pseudo-circle"></text>
          </view>
        </view>
      </view>
      <scroll-view :refresher-enabled="true" :scroll-y="true" class="scroll-view">
        <view is="components/MySwiper">
          <view class="carousel MySwiper--carousel">
            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
              <swiper-item style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  transform: translate(0%, 0px) translateZ(0px);
                ">
                <navigator class="navigator MySwiper--navigator" hover-class="none">
                  <image class="image MySwiper--image sk-image" mode="aspectFill"></image>
                </navigator>
              </swiper-item>
            </swiper>
            <view class="indicator MySwiper--indicator">
              <text class="dot MySwiper--dot active MySwiper--active"></text>
              <text class="dot MySwiper--dot"></text>
              <text class="dot MySwiper--dot"></text>
              <text class="dot MySwiper--dot"></text>
              <text class="dot MySwiper--dot"></text>
            </view>
          </view>
        </view>
        <view is="components/CategoryPanel">
          <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-591 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-605 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-6 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-755 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-637 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-574 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-236 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-196 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-869 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-383 sk-text">品牌</text>
            </navigator>
          </view>
        </view>
        <view is="components/HotPanel">
          <view class="panel HotPanel--panel hot HotPanel--hot">
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-142 sk-text">特惠推荐</text>
                <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-968 sk-text">精选全攻略</text>
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-478 sk-text">爆款推荐</text>
                <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-399 sk-text">最受欢迎</text>
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-336 sk-text">一站买全</text>
                <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-629 sk-text">精心优选</text>
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-983 sk-text">新鲜好物</text>
                <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-13 sk-text">生活加分项</text>
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
          </view>
        </view>
        <view is="components/MyGuess" class="r">
          <view class="caption MyGuess--caption">
            <text
              class="text MyGuess--text sk-transparent sk-text-0-0000-794 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-3333-463 {
  background-image: linear-gradient(transparent 3.3333%,
      #eeeeee 0%,
      #eeeeee 96.6667%,
      transparent 0%) !important;
  background-size: 100% 27.1739rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-661 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 38.0435rpx;
  position: relative !important;
}

.sk-text-14-2857-591 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-605 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-6 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-755 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-637 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-574 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-236 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-196 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-869 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-383 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-142 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-968 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-478 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-399 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-336 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-629 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-983 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-13 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-0-0000-794 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 30.7971rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
