// @ts-ignore
import IconsGallery from "../../../components/gallery/icons-gallery/src/IconsGallery.vue";

export default {
    title: 'gallery/IconsGallery',
    component: IconsGallery
};

export const Default = () => ({
    components: { IconsGallery },
    props: {
        icons: { default: () => [
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png'
        ]}
    },
    template: '<icons-gallery :icons="icons" :active="0" :items-per-row-mobile="1"/>'
});
