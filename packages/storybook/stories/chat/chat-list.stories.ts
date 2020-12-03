// @ts-ignore
import ChatList from "@vuemodules/chat-list";

export default {
    title: 'chat/ChatList',
    component: ChatList
};

export const Default = () => ({
    components: { ChatList },
    template: '<chat-list/>'
});
