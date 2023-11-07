import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
