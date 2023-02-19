// import {useStore} from 'vuex'
export default {
  add(state: any, num: number): void {
    console.log('+')

    state.num += num
  }
}
