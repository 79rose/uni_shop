<script setup lang="ts">
//
import CustomNavbar from '@/components/CustomNavbar.vue'
import CategoryPanel from '@/components/CategoryPanel.vue'
import HotPanel from '@/components/HotPanel.vue'
import { getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { CategoryItem, HotItem } from '@/types/home'
let CategoryPanellist: CategoryItem[]
let hotlist: HotItem[]
const getCategory = async () => {
  const res = await getHomeCategoryAPI()
  CategoryPanellist = res.result
}
const getHot = async () => {
  const res = await getHomeHotAPI()
  hotlist = res.result
}
</script>

<template>
  <view class="index">
    <CustomNavbar></CustomNavbar>
    <CategoryPanel v-bind:list="CategoryPanellist"></CategoryPanel>
    <HotPanel v-bind:list="hotlist"></HotPanel>
  </view>
</template>

<style lang="scss">
//
.index {
  background-color: #f7f7f7;
}
</style>
