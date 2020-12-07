<template>
    <div class="chat-input-wrapper">
        <slot>
            <v-text-field
                v-model="message"
                solo
                dense
                hide-details
                class="input"
                @keyup.enter="sendMessage"
            />
        </slot>
        <v-btn style="margin-left: 25px" @click="sendMessage">
          <v-icon>
            mdi-send
          </v-icon>
        </v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component( {} )
export default class ChatMessagesInput extends Vue {
    message = '';

    sendMessage () {
        this.$emit( 'sendMessage', this.message );
        this.message = '';
    }
}

</script>

<style lang="scss" scoped>
.chat-input-wrapper {
    display: flex;
    height: 55px;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 0 10px;
    margin-top: auto;
    width: 100%;
}
</style>
