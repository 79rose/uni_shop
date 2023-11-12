import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AddressItem } from '@/types/address'

export const useAddressStore = defineStore('adress', () => {
  const selectedAdress = ref<AddressItem>()
  const setSelectedAdress = (item: AddressItem) => {
    selectedAdress.value = item
  }
  return {
    selectedAdress,
    setSelectedAdress,
  }
})
