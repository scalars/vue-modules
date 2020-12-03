import Vue from 'vue'
import ChatList from './ChatList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ChatList),
}).$mount('#app')
