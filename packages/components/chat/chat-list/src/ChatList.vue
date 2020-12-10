<template>
    <perfect-scrollbar class="scroll" data-app>
      <div v-for="(chat, index) of chatList" :key="`msg-ch${index}`" class="vm--chat-card__container" @click.stop="itemClick(chat)">
        <avatar v-if="chat.avatar.url" :pictureUrl="chat.avatar.url" :action="false" size="35px" class="vm--chat-card__avatar" @click="itemClick(chat)"/>
        <div class="vm--chat-card__body">
          <p class="vm--chat-card__title" @click.stop="titleClick(chat)">{{ chat.title }}</p>
          <p class="vm--chat-card__subtitle">{{ chat.subtitle }}</p>
          <p class="vm--chat-card__helper-text">{{ chat.helperText }}</p>
        </div>
        <div v-if="chat.count && chat.count > 0" class="vm--chat-card__count">{{chat.count}}</div>
        <div v-if="chat.options && chat.options.length > 0" class="vm--chat-card__options" :style="{marginLeft: chat.count > 0 ? null : 'auto'}">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="accent" v-bind="attrs" v-on="on">
                mdi-dots-vertical
              </v-icon>
            </template>
            <v-list>
              <v-list-item
                  v-for="(item, i) in chat.options"
                  :key="`menu-${i}`"
              >
                <v-list-item-title @click="$emit( item.event, chat )">
                  {{ item.label }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </perfect-scrollbar>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import Avatar from './components/Avatar.vue';
import { Chat } from './components/chatInterfaces';
import {PerfectScrollbar} from 'vue2-perfect-scrollbar';

@Component({
  components: {
    Avatar,
    PerfectScrollbar
  },
})
export default class ChatList extends Vue {
  //Props
  @Prop( { required: true } ) chatList: Chat[];

  //Events
  @Emit('item-click')
  itemClick(chat: Chat) {
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

<style lang="scss" >
.vm--chat-card__ {
  &container {
    display: flex;
    padding: 10px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    align-items: center;
    margin-bottom: 10px;
    height: 46px;
    overflow: hidden;

    //reset
    p, span {
      margin: 0;
      padding: 0;
    }
  }

  &count {
    margin-left: auto;
  }

  &avatar {
    margin-right: 10px;
  }

  &title {
    font-weight: bold;
    cursor: pointer;
  }

  &subtitle {
    font-size: 0.8rem;
  }

  &helper-text {
    font-size: 0.6rem;
  }

  &count {
    border-radius: 50%;
    background-color: lightgrey;
    font-size: 0.8rem;
    padding: 4px;
    width: 30px;
    height: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
}

.v-list-item__title {
  cursor:  pointer;
}
</style>
