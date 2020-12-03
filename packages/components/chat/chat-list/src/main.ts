import Vue from 'vue'
import ChatList from './ChatList.vue'

Vue.config.productionTip = false

const messages = [
    {text: "hello", id: 1, createdAt: "january", user: {id: 1}},
    {text: "hello", id: 1, createdAt: "january", user: {id: 2}},
    {text: "hello", id: 1, createdAt: "january", user: {id: 3}},
]

new Vue({
  render: createElement => createElement(ChatList, {props: {messages, ownerId: 123}})
}).$mount('#app')
