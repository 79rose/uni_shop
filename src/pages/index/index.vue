<script setup lang="ts">
//
import CustomNavbar from '@/components/CustomNavbar.vue'
import CategoryPanel from '@/components/CategoryPanel.vue'
import { getHomeCategoryAPI } from '@/services/home'
import type { CategoryItem } from '@/types/home'
let list: CategoryItem[]

const getCategory = async () => {
  const res = await getHomeCategoryAPI()
  list = res.result
}
</script>

<template>
  <view class="index">
    <CustomNavbar></CustomNavbar>
    <CategoryPanel v-bind:list="list"></CategoryPanel>
  </view>
</template>

<style lang="scss">
//
.index {
  background-color: #f7f7f7;
}
</style>
