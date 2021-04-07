<template>
    <div class="vm-chat-msg__body--container">
        <perfect-scrollbar class="scroll" :style="{height: scrollAreaHeight}" ref="scroll">
            <div v-for="(message, index) of messages" :key="`msg-ch${index}`" class="vm-chat-msg__message" :class="{owner: message.userId === ownerUserId}">
                <avatar v-if="messagesAvatar && (message.userId !== ownerUserId)" :picture-url="getUserAvatar(message.userId)" :action="false" size="35px" class="avatar" />
                <div class="vm-chat-msg__message-text-wrapper" :class="{owner: message.userId === ownerUserId}">
                    <p class="vm-chat-msg__message-text" :class="{owner: message.userId === ownerUserId}">
                        {{ message.text }}
                    </p>
                    <span class="vm-chat-msg__date">{{ message.date }}</span>
                </div>
                <avatar v-if="messagesAvatar && (message.userId === ownerUserId)" :picture-url="getUserAvatar(message.userId)" :action="false" size="35px" class="avatar" />
                <div v-if="message.userId === ownerUserId && menu" class="options">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon color="accent"
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                mdi-dots-vertical
                            </v-icon>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(item, i) in menu"
                                :key="`menu-${i}`"
                            >
                                <v-list-item-title @click="actionOnMessage( { option: item, message } )">
                                    {{ item.label }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import Avatar from './Avatar.vue'
import { Message, MenuOption, User } from './chatInterfaces'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

@Component( {
    components: {
        Avatar,
        PerfectScrollbar
    }
} )
export default class ChatMessagesBody extends Vue {
    @Prop( { required: true } ) messages: Message [];
    @Prop( { required: true } ) users: User [];
    @Prop( { required: true } ) ownerUserId: number|string;
    @Prop( { default: 'calc(100vh - 40px)' } ) scrollAreaHeight: string;
    @Prop( { default: true } ) messagesAvatar: boolean;
    @Prop() menu: MenuOption[];

    @Emit()
    actionOnMessage ( data: { option: MenuOption; message: Message } ) {
        return data
    }

    getUserAvatar( userMessageId: number | string ) {
        return this.users.find( user => user.id === userMessageId )?.avatar
    }

    scrollToEnd () {
        const scroll: Vue = ( this.$refs.scroll as Vue )
        scroll.$el.scrollTop = scroll.$el.scrollHeight
    }
}

</script>

<style lang="scss" >
.vm-chat-msg__body--container {
  //min-height: 100px;
}

.vm-chat-msg__date {
  font-size: 0.8em;
  color: gray;
}

.vm-chat-msg__message {
    display: flex;
    padding: 10px;
    max-width: 75%;

    .avatar {
        margin: 0 10px;
    }

    &.owner {
        margin-left: auto;
    }
}

.vm-chat-msg__message-text-wrapper {
  p {
    margin: 0;
  }

  &.owner {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

.vm-chat-msg__message-text {
  background-color: lightgrey;
  padding: 10px;
  border-radius: 3px;
  padding-left: 15px;
  min-width: 160px;

  &.owner {
    background-color: lightblue;
    padding-right: 15px;
    text-align: right;
  }
}

//Needed for perfect scrollbar
.ps__rail-x, .ps__rail-y{ display: none !important; }
.ps {
  overflow: hidden;
}
</style>
