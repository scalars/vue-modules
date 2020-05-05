// @ts-ignore
import Gallery from "../../../components/gallery/gallery/src/Gallery.vue";
import {withKnobs, number, text} from "@storybook/addon-knobs";

export default {
    title: 'gallery/Gallery',
    component: Gallery,
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { Gallery },
    props: {
        imageWidth: {default: text('Width', '400px', 'Image')},
        imageHeight: {default: text('Height', '300px', 'Image')},
        imageSpace: {default: text('Space', '10px', 'Image')},
        imageBorderRadius: {default: text('Border radius', '5px', 'Image')},
        miniatureWidth: {default: number('Width', 70, {}, 'Miniature')},
        miniatureHeight: {default: number('Height', 70, {}, 'Miniature')},
        miniatureSpace: {default: number('Space', 10, {}, 'Miniature')},
        miniatureBorderRadius: {default: text('Border radius', '5px', 'Miniature')}
    },
    data() {
        return {
            images: [
                'https://cdn.pixabay.com/photo/2020/04/24/08/57/street-5085971_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/03/11/01/53/landscape-4920705_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/04/23/12/44/lighthouse-5082316_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/04/22/08/06/dolomites-5076487_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/04/25/17/11/landscape-5091781_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/04/17/14/16/landscape-5055384_960_720.jpg'
            ]
        }
    },
    template: `<gallery :images="images" style="max-width: 400px; box-sizing: border-box;" :miniature-config="{
        width: miniatureWidth,
        height: miniatureHeight,
        space: miniatureSpace,
        borderRadius: miniatureBorderRadius
    }" :gallery-config="{
        width: imageWidth,
        height: imageHeight,
        spaceToMiniatures: imageSpace,
        borderRadius: imageBorderRadius
    }">
        <svg width="20px" slot="left-icon" style="transform: rotateZ(180deg)" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="#fff" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
        <svg width="20px" slot="right-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="#fff" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>
        <svg width="20px" slot="close-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11 fa-3x"><path fill="#fff" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg>
        <svg width="20px" slot="fullScreen-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-expand fa-w-14 fa-3x"><path fill="#fff" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z" class=""></path></svg>
    </gallery>`
});
