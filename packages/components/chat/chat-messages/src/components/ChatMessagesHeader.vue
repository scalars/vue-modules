<template>
    <div v-if="header" class="chat-header-wrapper">
        <user-widget
            :picture="header.avatar"
            :username="header.title"
            :label="header.subtitle"
            @usernameAction="$emit('usernameAction')"
            @labelAction="$emit('labelAction')"
        />
        <div v-if="menu" class="options">
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
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserWidget from './UserWidget.vue';
import { Header, MenuOption } from './chatInterfaces';

@Component( {
    components: {
        UserWidget
    }
} )
export default class ChatMessagesHeader extends Vue {
    @Prop( ) header: Header;
    @Prop() menu: MenuOption[];
}

</script>

<style lang="scss" scoped>
.chat-header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    min-height: 55px;
    padding: 0 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.back-button {
    cursor: pointer;
}
</style>
