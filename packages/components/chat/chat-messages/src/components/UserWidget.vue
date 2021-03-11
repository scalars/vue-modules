<template>
    <div class="vm-user-widget__wrapper" @click="$emit('click', $event)">
        <avatar
            class="vm-user-widget__avatar"
            :picture-url="picture"
            :size="pictureSize"
            :action="false"
            :with-default-image="withDefaultImage"
            @click="avatarClick"
        />
        <div v-if="username || label" class="vm-user-widget__user-info">
            <span v-if="username" class="vm-user-widget__username" @click="$emit('usernameAction')">{{ username }}</span>
            <span
                v-if="label"
                :style="{fontSize: sizeLabel, color: colorLabel, fontWeight: weightLabel}"
                class="vm-user-widget__label"
                @click="$emit('labelAction')"
            >
                {{ label }}
            </span>
            <span v-if="extra" class="vm-user-widget__extra" :style="{color: colorExtra, textDecoration: decorationExtra }">{{ extra }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import Avatar from './Avatar.vue'

@Component( {
    components: { Avatar }
} )
export default class UserWidget extends Vue {
    @Prop( {} ) picture: string;
    @Prop( { default: '30px' } ) pictureSize: string;
    @Prop( {} ) username: string;
    @Prop( {} ) label: string;
    @Prop( {} ) extra: string;
    @Prop( { default: '#888' } ) colorExtra: string;
    @Prop( { default: '#none' } ) decorationExtra: string;
    @Prop( { default: '0.85em' } ) sizeLabel: string;
    @Prop( { default: '#35C3D0' } ) colorLabel: string;
    @Prop( { default: 'normal' } ) weightLabel: string;
    @Prop( { default: true } ) withDefaultImage: boolean;

    @Emit( 'avatar-click' )
    avatarClick() {
        return
    }
}

</script>

<style lang="scss" scoped>
.vm-user-widget__ {
  &wrapper {
    display: flex;
    align-items: center;
    width: auto;
  }

  &user-info {
    display: flex;
    flex-direction: column;
  }

  &username {
    cursor: pointer;
  }

  &label {
    font-size: 0.85em;
  }

  &extra {
    font-size: 0.6em;
  }

  &avatar {
    margin-right: 10px;
  }
}
</style>
