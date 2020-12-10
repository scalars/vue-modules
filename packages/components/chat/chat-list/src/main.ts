import Vue from 'vue'
import ChatList from './ChatList.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const messages = [
    {title: "hello", id: 1, count: 5, subtitle: "january", avatar: {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXVLL0cOSXWk%2Fmaxresdefault.jpg&f=1&nofb=1"}, options: [{label: "Hello"}]},
    {title: "hello asdf adsf d fasdf asdf asdfasdfasdfasdfasdf asdf asdf", id: 1, options: [{label: "Hello"}],  count: 0, subtitle: "janasdfdasary", avatar: {}},
    {title: "hello", id: 1, subtitle: "january", helperText: 'today', avatar: {}, count: 10},
]

new Vue({
  vuetify,
  render: createElement => createElement(ChatList, {props: {chatList: messages, ownerId: 123}})
}).$mount('#app')
