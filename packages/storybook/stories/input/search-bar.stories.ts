// @ts-ignore
import SearchBar from "../../../components/input/search-bar/src/SearchBar.vue";
import { action } from '@storybook/addon-actions';
import { boolean, color, radios, text, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'input/SearchBar',
    component: SearchBar,
    decorators: [withKnobs]
};

const options = {
    Default: 'default',
    Separated: 'separated'
};

export const Default = () => ({
    components: { SearchBar },
    props: {
        placeholder: {
            default: text('Placeholder', 'Buscar')
        },
        disabled: {
            default: boolean('Disabled', false)
        },
        theme: {
            default: radios('Theme', options, 'default')
        },
        primary: {
            default: color('Color button','#ee722f')
        },
        background: {
            default: color('Background', '#e5e8e9')
        },
        fontColor: {
            default: color('Font color', '#000')
        },
        borderRadius: {
            default: text('Border radius', '0')
        },
        borderRadiusButton: {
            default: text('Border radius button', '0')
        },
        height: {
            default: text('Height', '35px')
        },
        padding: {
            default: text('Input padding', '3px 15px')
        },
        border: {
            default: text('Border', '1px solid rgba(0, 0, 0, 0.1)')
        }
    },
    methods: {
        onSearch: action('onSearch')
    },
    template: `<search-bar style="max-width: 400px;" @onSearch="onSearch"
                           :placeholder="placeholder"
                           :primary="primary"
                           :background="background"
                           :disabled="disabled"
                           :font-color="fontColor"
                           :height="height"
                           :padding="padding"
                           :border="border"
                           :theme="theme"
                           :border-radius="borderRadius"
                           :border-radius-button="borderRadiusButton"
    >
        <svg style="width: 70%; color: #fff;" slot="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
    </search-bar>`
});
