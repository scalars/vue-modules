<template>
    <div class="chat-wrapper">
        <slot name="chat-header">
            <chat-messages-header
                v-if="header"
                ref="header"
                :header="header"
                :menu="headerMenu"
                :include-main-action="includeMainAction"
                @usernameAction="titleClick"
                @labelAction="subtitleClick"
                @action-click="headerActionClick"
                @avatar-click="avatarClick"
            >
                <slot name="menu" />
            </chat-messages-header>
        </slot>
        <chat-messages-body
            ref="body"
            class="messages"
            :owner-user-id="ownerUserId"
            :messages="messages"
            :menu="menu"
            :users="users"
            :messages-avatar="messagesAvatar"
            :scroll-area-height="getScrollAreaHeight()"
            @action-on-message="actionOnMessage"
        />
        <slot name="chat-input">
            <chat-messages-input :disabled-button="disabledSendButton" @sendMessage="sendMessage($event)"/>
        </slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import ChatMessagesHeader from './components/ChatMessagesHeader.vue'
import ChatMessagesBody from './components/ChatMessagesBody.vue'
import ChatMessagesInput from './components/ChatMessagesInput.vue'
import { Header, MenuOption, User, Message } from './components/chatInterfaces'

@Component( {
    components: {
        ChatMessagesHeader,
        ChatMessagesBody,
        ChatMessagesInput
    }
} )
export default class ChatMessages extends Vue {
    /**
   *  REQUIRED PROPS
   **/
    @Prop( { required: true } ) ownerUserId: number;
    @Prop( { required: true } ) users: User [];
    @Prop( { required: true, default: [] } ) messages: Message[];

    /**
   *  PROPS
   **/
    @Prop( { default: false } ) messagesAvatar: boolean; //default: false
    @Prop( { default: false } ) includeMainAction: boolean; //default: false
    @Prop( { default: false } ) disabledSendButton: boolean; //default: false
    @Prop() scrollAreaHeight: string;
    @Prop() menu: MenuOption[];
    @Prop() headerMenu: MenuOption[];
    @Prop() header: Header;

    /**
   *  METHODS
   **/

    mounted () {
        if ( this.menu ) {
            const header: Vue = this.$refs.header as Vue
            this.menu.forEach( ( option: MenuOption ) => {
                header.$on( option.event, () => {
                    this.$emit( option.event )
                } )
            } )
        }
    }

    scrollToEnd() {
        ( this.$refs.body as ChatMessagesBody ).scrollToEnd()
    }

    /**
   * PRIVATE METHODS
   **/
    private getScrollAreaHeight() {
        if ( this.scrollAreaHeight ) {
            return this.scrollAreaHeight
        }
        if ( this.header ) {
            return 'calc(100vh - 95px)'
        } else {
            return 'calc(100vh - 40px)'
        }
    }

    private actionOnMessage( { option, message }: { option: MenuOption; message: Message } ) {
        this.$emit( option.event, message )
    }

    /**
   * EVENTS
   */
    @Emit( 'header-action-click' )
    headerActionClick() {
        return
    }
    @Emit( 'avatar-click' )
    avatarClick() {
        return
    }

    @Emit( 'title-click' )
    titleClick() {
        return
    }

    @Emit( 'subtitle-click' )
    subtitleClick() {
        return
    }

    @Emit( 'send-message' )
    sendMessage( message: string ) {
        return message
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
