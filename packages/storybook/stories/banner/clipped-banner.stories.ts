// @ts-ignore
import ClippedBanner from "../../../components/banner/clipped-banner/src/ClippedBanner.vue";
// @ts-ignore
import ItemBanner from "../../../components/banner/clipped-banner/src/ItemBanner.vue";
import { number, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'banner/ClippedBanner',
    component: ClippedBanner,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { ClippedBanner, ItemBanner },
    props: {
        activeItem: {
            default: number('Active', 0)
        }
    },
    data() {
        return {
            items: [
                {
                    img: "https://dev.rutasurenas.com/static/img/7ed7474.jpeg"
                },
                {
                    img: "https://dev.rutasurenas.com/static/img/fa61797.jpeg"
                },
                {
                    img: "https://dev.rutasurenas.com/static/img/24e3369.jpeg"
                },
                {
                    img: "https://dev.rutasurenas.com/static/img/7ed7474.jpeg"
                },
                {
                    img: "https://dev.rutasurenas.com/static/img/fa61797.jpeg"
                },
                {
                    img: "https://dev.rutasurenas.com/static/img/24e3369.jpeg"
                },
                {
                    img: "https://dev.rutasurenas.com/static/img/382f574.jpeg"
                }
            ],
            active: 0
        }
    },
    watch: {
        activeItem: function (value: any) {
            // @ts-ignore
            this.active = value;
        }
    },
    methods: {
        setActive: function (index: any) {
            // @ts-ignore
            this.active = index;
        }
    },
    template: `<clipped-banner item-width="10%" item-active-width="40%" height="584px">
        <template slot-scope="{width, activeWidth}">
            <item-banner
                v-for="(item, index) of items"
                :key="index"
                :width="width"
                :active-width="activeWidth"
                :active="active === index"
                :background="item.img"
                clip-size="50px"
                overlap-active-color="rgba(0,0,50,0.4)"
                @click="setActive(index)"
            >
                <div style="height: 100vh; width: 100%;display: flex;justify-content: center;align-items: center;color:#fff;">
                    <h1>Content</h1>
                </div>
            </item-banner>
        </template>
    </clipped-banner>`
});
