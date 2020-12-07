<template>
    <div class="vm-chat-msg__body--container">
            <perfect-scrollbar class="scroll">
                <div v-for="(message, index) of messages" :key="`msg-ch${index}`" class="vm-chat-msg__message" :class="{owner: message.userId === ownerUserId}">
                    <avatar v-if="includeAvatar && (message.userId !== ownerUserId)" :picture-url="getUserAvatar(message.userId)" :action="false" size="35px" class="avatar" />
                    <div class="text">
                        <p>
                            {{ message.text }}
                        </p>
                        <span class="vm-chat-msg__date">{{ message.date }}</span>
                    </div>
                  <avatar v-if="includeAvatar && (message.userId === ownerUserId)" :picture-url="getUserAvatar(message.userId)" :action="false" size="35px" class="avatar" />
                    <div v-if="message.userId === ownerUserId && menu" class="options">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon color="accent" v-bind="attrs" v-on="on">
                                    mdi-dots-vertical
                                </v-icon>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(item, i) in menu"
                                    :key="`menu-${i}`"
                                >
                                    <v-list-item-title @click="$emit( item.event, message )">
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import Avatar from './Avatar.vue';
import { Message, MenuOption, User } from './chatInterfaces';
import {PerfectScrollbar} from 'vue2-perfect-scrollbar';

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
    @Prop( { default: true } ) includeAvatar: boolean;
    @Prop() menu: MenuOption[];

    getUserAvatar(userMessageId: number | string) {
      return this.users.find(user => user.id === userMessageId)?.avatar;
    }
}

</script>

<style lang="scss" >
.vm-chat-msg__body--container {
  min-height: 100px;
}

.vm-chat-msg__date {
  font-size: 0.8em;
}

.vm-chat-msg__message {
    display: flex;
    align-items: flex-end;
    padding: 10px;
    max-width: 75%;

    .avatar {
        margin: 0 10px;
    }

    .text {
        flex: 1 1 auto;
        background-color: #eaeaea;
        padding: 10px;
        border-radius: 3px;

        p {
            margin: 0;
        }
    }

    &.owner {
        margin-left: auto;
    }
}
</style>
