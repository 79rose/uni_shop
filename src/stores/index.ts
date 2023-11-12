import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 使用持久化存储插件
pinia.use(persist)

// 默认导出，给 main.ts 使用
export default pinia

export * from './modules/member'
export * from './modules/address'
// ...

// const files = import.meta.globEager('./modules/*.ts')
