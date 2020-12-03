// @ts-ignore
import ChatList from "../../../components/chat/chat-list/src/ChatList.vue";

export default {
    title: 'chat/ChatList',
    component: ChatList
};

export const Default = () => ({
    components: { ChatList },
    template: '<chat-list/>'
});
