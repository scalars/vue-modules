<template>
    <div v-if="header" class="chat-header-wrapper" data-app>
        <div style="display: inline" @click.stop="actionClick">
          <slot name="main-action" v-if="includeMainAction">
            <v-icon class="vm-chat-header__main-action-icon">
              mdi-arrow-left
            </v-icon>
          </slot>
        </div>

        <user-widget
            :picture="header.avatar"
            :username="header.title"
            :label="header.subtitle"
            @usernameAction="$emit('usernameAction')"
            @labelAction="$emit('labelAction')"
            @avatar-click="avatarClick"
        />

        <slot name="menu">
          <div v-if="menu && menu.length > 0" class="options">
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon color="accent" v-bind="attrs" v-on="on">
                        mdi-dots-vertical
                    </v-icon>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in menu"
                        :key="index"
                    >
                        <v-list-item-title @click="$emit( item.event )">
                            {{ item.label }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        </slot>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import UserWidget from './UserWidget.vue';
import { Header, MenuOption } from './chatInterfaces';

@Component( {
    components: {
        UserWidget
    }
} )
export default class ChatMessagesHeader extends Vue {
    @Prop( {default: false} ) includeMainAction: boolean;
    @Prop( ) header: Header;
    @Prop() menu: MenuOption[];

    mounted() {
      console.log(this.menu)
    }

  //Events
  @Emit('action-click')
  actionClick(chat: any) {
    return chat
  }

  @Emit('avatar-click')
  avatarClick() {
    return
  }
}

</script>

<style lang="scss" scoped>
.chat-header-wrapper {
    display: flex;
    align-items: center;
    height: 55px;
    min-height: 55px;
    padding: 0 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.options {
  margin-left: auto;
}

.back-button {
    cursor: pointer;
}

.vm-chat-header__main-action-icon {
  margin-right: 10px;
  cursor: pointer;
}
</style>
