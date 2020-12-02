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
                    img: "https://cdn.pixabay.com/photo/2020/04/12/10/37/sunset-5033708_960_720.jpg"
                },
                {
                    img: "https://cdn.pixabay.com/photo/2020/03/01/06/39/climbing-rose-4891820_960_720.jpg"
                },
                {
                    img: "https://cdn.pixabay.com/photo/2020/04/09/19/27/cherry-blossom-5022811_960_720.jpg"
                },
                {
                    img: "https://cdn.pixabay.com/photo/2020/04/09/14/32/japan-5021733_960_720.jpg"
                },
                {
                    img: "https://cdn.pixabay.com/photo/2020/04/10/16/19/landscape-5026558_960_720.jpg"
                },
                {
                    img: "https://cdn.pixabay.com/photo/2020/04/12/14/44/fantasy-5034448_960_720.jpg"
                },
                {
                    img: "https://cdn.pixabay.com/photo/2020/03/28/15/20/cat-4977436_960_720.jpg"
                }
            ],
            active: 0
        }
    },
    watch: {
        // @ts-ignore
        activeItem: function (value: any) {
            // @ts-ignore
            this.active = value;
        }
    },
    methods: {
        // @ts-ignore
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
