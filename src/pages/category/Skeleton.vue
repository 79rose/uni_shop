<!--
此文件为开发者工具生成，生成时间: 2023/11/7下午12:50:07
使用方法：
在 D:\uni_shop\dist\dev\mp-weixin\pages\category\category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\uni_shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view class="search">
        <view class="input">
          <text class="icon-search sk-transparent sk-text-14-2857-37 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories">
        <scroll-view scroll-y="true" class="primary">
          <view class="item active sk-transparent sk-text-14-2857-483 sk-text sk-pseudo sk-pseudo-circle">居家</view>
          <view class="item sk-transparent sk-text-14-2857-202 sk-text sk-pseudo sk-pseudo-circle">美食</view>
          <view class="item sk-transparent sk-text-14-2857-218 sk-text sk-pseudo sk-pseudo-circle">服饰</view>
          <view class="item sk-transparent sk-text-14-2857-633 sk-text sk-pseudo sk-pseudo-circle">母婴</view>
          <view class="item sk-transparent sk-text-14-2857-767 sk-text sk-pseudo sk-pseudo-circle">个护</view>
          <view class="item sk-transparent sk-text-14-2857-537 sk-text sk-pseudo sk-pseudo-circle">严选</view>
          <view class="item sk-transparent sk-text-14-2857-333 sk-text sk-pseudo sk-pseudo-circle">数码</view>
          <view class="item sk-transparent sk-text-14-2857-251 sk-text sk-pseudo sk-pseudo-circle">运动</view>
          <view class="item sk-transparent sk-text-14-2857-447 sk-text sk-pseudo sk-pseudo-circle">杂项</view>
        </scroll-view>
        <scroll-view scroll-y="true" class="secondary">
          <view is="components/MySwiper" class="banner">
            <view class="carousel MySwiper--carousel">
              <swiper circular="true" interval="3000" current="0" autoplay="false">
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
                <swiper-item style="
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      transform: translate(100%, 0px) translateZ(0px);
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
          <view class="panel">
            <view class="title">
              <text class="name sk-transparent sk-text-26-6667-746 sk-text">居家生活用品</text>
              <navigator class="more sk-transparent sk-text-30-0000-818 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none">全部</navigator>
            </view>
            <view class="section">
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-743 sk-text">法国年份雅文邑700毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-282 sk-text">1480.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-287 sk-text">梅乃宿梅酒720毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-828 sk-text">168.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-826 sk-text">多米尼加陈年朗姆酒700毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-247 sk-text">238.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-753 sk-text">全新升级，四川酸辣粉195克*6杯</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-424 sk-text">69.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-745 sk-text">川味牛肉辣椒酱190克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-926 sk-text">38.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-354 sk-text">极光限定 珠光蓝珐琅锅</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-205 sk-text">199.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<style lang="scss">
/*
此文件为开发者工具生成，生成时间: 2023/11/7下午12:50:07

在 D:\uni_shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-37 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-483 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-202 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-218 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-633 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-767 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-537 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-333 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-251 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-447 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-26-6667-746 {
  background-image: linear-gradient(transparent 26.6667%,
      #eeeeee 0%,
      #eeeeee 73.3333%,
      transparent 0%) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-30-0000-818 {
  background-image: linear-gradient(transparent 30%,
      #eeeeee 0%,
      #eeeeee 70%,
      transparent 0%) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-14-2857-743 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-282 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-287 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-828 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-826 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-247 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-753 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-424 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-745 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-926 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-354 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-205 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
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
