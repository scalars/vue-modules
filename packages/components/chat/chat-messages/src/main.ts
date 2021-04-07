import Vue from 'vue'
import ChatMessages from './ChatMessages.vue'
import vuetify from './plugins/vuetify'
import { Message, User } from '@/components/chatInterfaces'

Vue.config.productionTip = false

const messages: Message [] = [
    { id: 1, text: 'helloooo world', date: 'jan 1, 2020', userId: 1 },
    { id: 2, text: 'helloooo world fsadfasd fa', date: 'jan 1, 2020', userId: 2 },
    { id: 3, text: `helloooo world 2231 123helloooo world 2231 123helloooo world 2231 123helloooo world 2231 123  helloooo world 2231 123helloooo world 2231 123 helloooo world 2231 123helloooo world 2231 123 helloooo world 2231 123 helloooo world 2231 123helloooo world 2231 123helloooo world 2231 123 helloooo world 2231 123' +
            helloooo world 2231 123 helloooo world 2231 123helloooo world 2231 123helloooo world 2231 123`, date: 'jan 1, 2020', userId: 1 },
    { id: 4, text: 'helloooo world fsadfasd fa', date: 'jan 1, 2020', userId: 2 },
    { id: 5, text: 'helloooo world fsadfasd fa', date: 'jan 1, 2020', userId: 1 },
    { id: 6, text: 'helloooo world fsadfasd fa', date: 'jan 1, 2020', userId: 1 },
    { id: 7, text: 'helloooo world fsadfasd fa', date: 'jan 1, 2020', userId: 1 }
]

const users: User [] = [
    {
        id: 1,
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXVLL0cOSXWk%2Fmaxresdefault.jpg&f=1&nofb=1',
        name: 'Paulo'
    },
    {
        id: 2,
        avatar: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
        name: 'Vale'
    }
]

const header = {
    avatar: 'https://free-images.com/lg/5c4e/mont_blanc_2005_118.jpg',
    title: 'My chat',
    subtitle: 'Great Chat'
}

const menu =  [
    { event: 'event-one', label: 'Label One' }
]
const headerMenu = [ {
    label: 'My option',
    event: 'my-menu'
} ]

new Vue( {
    vuetify,
    render: createElement => createElement( ChatMessages, { props: { menu, messages: messages, users, ownerUserId: 1, header, headerMenu, includeMainAction: true } } )
} ).$mount( '#app' )
