import type { BannerItem, CategoryItem } from '@/types/home'
import { http } from '@/utils/http'
/**
 *
 * @param distributionSite 1为首页 2为其他页面
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
    // data,
  })
}
