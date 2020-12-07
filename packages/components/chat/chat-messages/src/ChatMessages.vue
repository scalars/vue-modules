<template>
    <div class="chat-wrapper">
        <chat-messages-header
            v-if="header"
            ref="header"
            :header="header"
            :menu="headerMenu"
            :include-main-action="includeMainAction"
            @usernameAction="$emit('usernameAction')"
            @labelAction="$emit('labelAction')"
        />
        <chat-messages-body
            ref="messages"
            class="messages"
            :owner-user-id="ownerUserId"
            :messages="messages"
            :menu="menu"
            :users="users"
            :messages-avatar="messagesAvatar"
            :scroll-area-height="getScrollAreaHeight()"
            @action-click="headerActionClick"
        />
        <chat-messages-input @sendMessage="$emit('sendMessage', $event)">
            <slot />
        </chat-messages-input>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import ChatMessagesHeader from './components/ChatMessagesHeader.vue';
import ChatMessagesBody from './components/ChatMessagesBody.vue';
import ChatMessagesInput from './components/ChatMessagesInput.vue';
import { Header, MenuOption, User, Message } from './components/chatInterfaces';
import {Chat} from "../../chat-list/src/components/chatInterfaces";

@Component( {
    components: {
      ChatMessagesHeader,
      ChatMessagesBody,
      ChatMessagesInput
    }
} )
export default class ChatMessages extends Vue {
  @Prop( {required: true} ) ownerUserId: number;
  @Prop( {required: true} ) users: User [];
  @Prop( { required: true, default: [] } ) messages: Message[];
  @Prop( { default: false } ) messagesAvatar: boolean;
  @Prop( { default: false } ) includeMainAction: boolean;
  @Prop() scrollAreaHeight: string;
  @Prop() menu: MenuOption[];
  @Prop() headerMenu: MenuOption[];
  @Prop() header: Header;

    mounted () {
        if ( this.menu ) {
            const header: Vue = this.$refs.header as Vue;
            this.menu.forEach( ( option: MenuOption ) => {
                header.$on( option.event, () => {
                    this.$emit( option.event );
                } );
            } );
        }
    }

  getScrollAreaHeight() {
      if (this.scrollAreaHeight) {
        return this.scrollAreaHeight
      }
      if (this.header) {
        return 'calc(100vh - 95px)'
      } else {
        return 'calc(100vh - 40px)'
      }
  }

  //Events
  @Emit('header-action-click')
  headerActionClick(chat: Chat) {
    return chat
  }
  @Emit('avatar-click')
  avatarClick(chat: Chat) {
    return chat
  }
  @Emit('title-click')
  titleClick(chat: Chat) {
    return chat
  }
}

</script>

<style lang="scss" scoped>
.chat-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 100%;
    position: relative;
    padding-bottom: 40px;

    .messages {

    }
}
</style>
