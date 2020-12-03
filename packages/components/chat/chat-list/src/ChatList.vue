<template>
  <div>
    <perfect-scrollbar class="scroll">
      <div v-for="(message, index) of chatList" :key="`msg-ch${index}`" class="message">
        <avatar picture="" :action="false" size="35px" class="avatar" />
        <div class="text">
          <p>
            {{ message.text }}
          </p>
          <span class="date">{{ message.createdAt }}</span>
        </div>
        <div v-if="message.options && message.options.length > 0" class="options">
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
import Avatar from '@/components/Avatar.vue';
import { Chat, MenuOption } from '@/components/chatInterfaces.ts';
import HelloWorld from "@/components/HelloWorld.vue";
import {PerfectScrollbar} from 'vue2-perfect-scrollbar';

@Component({
  components: {
    HelloWorld,
    Avatar,
    PerfectScrollbar
  },
})
export default class ChatList extends Vue {
  @Prop( { required: true } ) chatList: Chat[];
  @Prop() menu: MenuOption[];
}

</script>

<style lang="scss" scoped>
.message {
  display: flex;
  align-items: flex-end;
  padding: 10px;

  .avatar {
    margin-right: 10px;
    margin-bottom: 5px;
  }

  .text {
    flex: 1 1 auto;
    max-width: 600px;
    background-color: #eaeaea;
    padding: 10px;
    border-radius: 3px;

    p {
      margin: 0;
    }

    .date {
      font-size: 0.85em;
    }
  }

  &.owner {
    justify-content: flex-end;
    align-items: center;

    .text {
      background-color: red;
      color: #fff;
    }
  }
}
.ps {
  max-height: 100%;
}
</style>
