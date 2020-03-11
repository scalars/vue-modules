// @ts-ignore
import SimpleGallery from "../../../components/gallery/simple-gallery/src/SimpleGallery.vue";
import { withKnobs, boolean, array, text } from '@storybook/addon-knobs';

export default {
    title: 'gallery/SimpleGallery',
    component: SimpleGallery,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { SimpleGallery },
    props: {
        continuous: {
            default: boolean('Continuous', false)
        },
        images: {
            default: array('Images', [
                'https://cdn.pixabay.com/photo/2019/04/27/22/09/space-4161418_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/02/26/15/19/meditation-at-the-lake-4882027_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/01/31/07/53/cartoon-4807395_960_720.jpg'
            ])
        },
        width: {
            default: text('Width', '400px')
        },
        height: {
            default: text('Height', '350px')
        }
    },
    template: `<div style="width: 100vw; height: 100vh;"><simple-gallery :images="images" :width="width" :height="height" :continuous="continuous"/></div>`
});
