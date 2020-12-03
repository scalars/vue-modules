import Vue from 'vue'
import ChatList from './ChatList.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const messages = [
    {text: "hello", id: 1, createdAt: "january", avatar: {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXVLL0cOSXWk%2Fmaxresdefault.jpg&f=1&nofb=1"}, options: [{label: "Hello"}]},
    {text: "hello", id: 1, createdAt: "january", avatar: {}},
    {text: "hello", id: 1, createdAt: "january", avatar: {}},
]

new Vue({
  vuetify,
  render: createElement => createElement(ChatList, {props: {chatList: messages, ownerId: 123}})
}).$mount('#app')
