import { createStore } from 'vuex'
import mutations from './mutations'
export const store = createStore({
  state() {
    return {
      num: 0
    }
  },
  mutations
})
export default store
