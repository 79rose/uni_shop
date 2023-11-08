<script setup lang="ts">
import {
  postMemberAddressAPI,
  getMemberAddressByIdAPI,
  putMemberAddressByIdAPI,
} from '@/services/address'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
const query = defineProps({
  id: String,
})
uni.setNavigationBarTitle({
  title: query.id ? '编辑收货地址' : '新建收货地址',
})

// onload(() => { })
// 表单数据
const form = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})
const getaddressByid = async () => {
  if (query.id) {
    const res = await getMemberAddressByIdAPI(query.id)
    Object.assign(form.value, res.result)
  }
}
onLoad(() => {
  getaddressByid()
})
const onPickerchange: UniHelper.RegionPickerOnChange = (ev) => {
  form.value.fullLocation = ev.detail.value.join(' ')
  // console.log(ev.detail.code)
  const [provinceCode, cityCode, countyCode] = ev.detail.code!
  Object.assign(form.value, {
    provinceCode,
    cityCode,
    countyCode,
  })
}
const onDefault: UniHelper.SwitchOnChange = (ev) => {
  form.value.isDefault = ev.detail.value ? 1 : 0
}
// 提交表单
const onSubmit = async () => {
  // 校验表单
  try {
    await formRef.value?.validate?.()
    if (query.id) await putMemberAddressByIdAPI(query.id, form.value)
    else await postMemberAddressAPI(form.value)
    // 成功提示
    uni.showToast({ icon: 'success', title: query.id ? '更改成功' : '添加成功' })
    // 返回上一页
    setTimeout(() => {
      uni.navigateBack()
    }, 400)
  } catch (err) {
    uni.showToast({
      title: '请完善表单信息',
      icon: 'error',
      mask: true,
    })
  }
}
const rules: UniHelper.UniFormsRules = {
  receiver: {
    rules: [{ required: true, errorMessage: '请输入收货人姓名' }],
  },
  fullLocation: {
    rules: [{ required: true, errorMessage: '请选择所在地区' }],
  },
  address: {
    rules: [{ required: true, errorMessage: '请选择详细地址' }],
  },
  contact: {
    rules: [
      { required: true, errorMessage: '请输入手机号码' },
      { pattern: /^1[3-9]\d{9}$/, errorMessage: '请输入正确的手机号码' },
    ],
  },
}
const formRef = ref<UniHelper.UniFormsInstance>()
</script>

<template>
  <view class="content">
    <uni-forms :rules="rules" :model="form" ref="formRef">
      <!-- 表单内容 -->
      <uni-forms-item name="receiver" class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </uni-forms-item>
      <uni-forms-item name="contact" class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </uni-forms-item>
      <uni-forms-item name="fullLocation" class="form-item">
        <text class="label">所在地区</text>
        <picker @change="onPickerchange" class="picker" mode="region" :value="form.fullLocation.split(' ')">
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="address" class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </uni-forms-item>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch class="switch" @change="onDefault" color="#27ba9b" :checked="form.isDefault === 1" />
      </view>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
