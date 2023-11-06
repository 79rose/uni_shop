<script setup lang="ts">
//
import CustomNavbar from '@/components/CustomNavbar.vue'
import CategoryPanel from '@/components/CategoryPanel.vue'
import HotPanel from '@/components/HotPanel.vue'
import MyGuess from '@/components/MyGuess.vue'
import Myswiper from '@/components/MySwiper.vue'
import { getHomeCategoryAPI, getHomeHotAPI, getHomeBannerAPI } from '@/services/home'
import type { CategoryItem, HotItem, BannerItem } from '@/types/home'
import type { MyxGuessInstance } from '@/types/component'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useGuessList } from '@/composables'
let CategoryPanellist = ref<CategoryItem[]>()
let hotlist = ref<HotItem[]>()
let swiperlist = ref<BannerItem[]>()
const getswiper = async () => {
  const res = await getHomeBannerAPI()
  swiperlist.value = res.result
}
const getCategory = async () => {
  const res = await getHomeCategoryAPI()
  CategoryPanellist.value = res.result
}
const getHot = async () => {
  const res = await getHomeHotAPI()
  hotlist.value = res.result
}
// 猜你喜欢组合式函数调用
const { myguess, onScrolltolower } = useGuessList()
let isloading = ref(false)
onLoad(async () => {
  isloading.value = false
  await Promise.all([getCategory(), getHot(), getswiper()])
  isloading.value = false
})
// 下拉刷新状态
let isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  myguess.value?.resetData() // 加载数据
  await Promise.all([getCategory(), getHot(), getswiper()]) // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <view class="viewport">
    <CustomNavbar></CustomNavbar>

    <scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered"
      class="scroll-view" @scrolltolower="onScrolltolower" scroll-y>
      <Myswiper :list="swiperlist ?? []"></Myswiper>
      <CategoryPanel :list="CategoryPanellist ?? []"></CategoryPanel>
      <HotPanel :list="hotlist ?? []"></HotPanel>
      <MyGuess ref="myguess"></MyGuess>
    </scroll-view>
  </view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
