<template>
    <div class="user-widget-wrapper" @click="$emit('click', $event)">
        <avatar class="avatar" :picture="picture" :size="pictureSize" :action="false" :with-default-image="withDefaultImage" />
        <div v-if="username || label" class="user-info">
            <span v-if="username" class="username" @click="$emit('usernameAction')">{{ username }}</span>
            <span
                v-if="label"
                :style="{fontSize: sizeLabel, color: colorLabel, fontWeight: weightLabel}"
                @click="$emit('labelAction')"
            >
                {{ label }}
            </span>
            <span v-if="extra" class="label extra" :style="{color: colorExtra, textDecoration: decorationExtra }">{{ extra }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Avatar from './Avatar.vue';

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
}

</script>

<style lang="scss" scoped>
.user-widget-wrapper {
    display: flex;
    align-items: center;
    width: auto;

    .avatar {
        margin-right: 10px;
    }

    .user-info {
        display: flex;
        flex-direction: column;

        .username {
            cursor: pointer;
        }

        .label {
            font-size: 0.85em;
        }
    }
}
</style>
