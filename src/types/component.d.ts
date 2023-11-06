/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import MySwipper from './MySwipper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    MySwipper: typeof MySwipper
  }
}
