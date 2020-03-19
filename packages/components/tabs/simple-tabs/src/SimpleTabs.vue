<template>
    <div class="vuemodules-simple-tabs">
        <div class="tabs" :style="{ backgroundColor: background }">
            <div
                class="tab"
                v-for="(tab, index) of tabContainers"
                :key="index" @click="setActive(index)"
                :style="{
                    backgroundColor: index === active ? backgroundActive : 'transparent',
                    color: fontColor
                }"
            >
                {{ getTitle(index) }} <span v-if="getIcon(index)" v-html="getIcon(index)" />
            </div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "simple-tabs",
    props: {
        default: { default: 0 },
        background: { default: '#fafafa' },
        backgroundActive: { default: '#dadada' },
        fontColor: { default: '#000' }
    },
    data() {
        return {
            tabContainers: [],
            active: 0
        };
    },
    methods: {
        getTitle(index) {
            return this.tabContainers[index].data.attrs.data.title;
        },
        getIcon(index) {
            return this.tabContainers[index].data.attrs.data.icon;
        },
        setActive(index) {
            this.active = index;
            this.updateTabs();
        },
        updateTabs() {
            this.tabContainers = this.$slots.default.filter(slot => slot.tag).sort((a, b) => {
                const indexA = a.data.attrs.data.index;
                const indexB = b.data.attrs.data.index;
                return indexA < indexB ? -1 : (indexA > indexB ? 1 : 0);
            });
            this.tabContainers.forEach((tabContainer, index) => {
                console.log(index, this.active);
                if (index !== this.active && !tabContainer.elm.classList.contains('hide')) {
                    tabContainer.elm.classList.add('hide');
                } else if (index === this.active) {
                    tabContainer.elm.classList.remove('hide');
                }
            });
        }
    },
    mounted () {
        this.active = this.default;
        this.$nextTick(this.updateTabs);
    }
};
</script>

<style lang="scss" scoped>
.vuemodules-simple-tabs {
    .tabs {
        display: flex;

        .tab {
            flex: 1 1 auto;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 200ms ease-in-out;
        }
    }
}
.hide {
    display: none;
}
</style>
