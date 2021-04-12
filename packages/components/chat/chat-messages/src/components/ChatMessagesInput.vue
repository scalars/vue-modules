<template>
    <div class="vm-chat-input__wrapper">
        <slot name="input">
            <v-text-field
                v-model="message"
                solo
                dense
                hide-details
                class="vm-chat-msg__input-input"
                @keyup.enter="sendMessage"
            />
        </slot>
        <slot name="send-btn">
            <v-btn @click.stop="sendMessage" :disabled="!message || disabledButton" class="vm-chat-msg__input-send-btn">
                <v-icon>
                    mdi-send
                </v-icon>
            </v-btn>
        </slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component( {} )
export default class ChatMessagesInput extends Vue {
    @Prop( { default: false } ) disabledButton: boolean;

    message = '';

    sendMessage () {
        this.$emit( 'sendMessage', this.message )
        this.message = ''
    }
}

</script>

<style lang="scss" scoped>
.vm-chat-input__wrapper {
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 0 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
}

.vm-chat-msg__input {
}

.vm-chat-msg__input-send-btn {
  margin-left: 25px;
}
</style>
