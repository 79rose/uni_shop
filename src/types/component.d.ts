/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import MySwipper from '@/components/MySwiper.vue'
import MyGuessVue from '@/components/MyGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    MySwipper: typeof MySwipper
    MyGuessVue: typeof MyGuessVue
  }
}
export type MyxGuessInstance = InstanceType<typeof MyGuessVue>
