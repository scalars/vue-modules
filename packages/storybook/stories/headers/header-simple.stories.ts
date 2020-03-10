// @ts-ignore
import HeaderSimple from "../../../components/header/header-simple/src/HeaderSimple";
// @ts-ignore
import NavSimple from "../../../components/header/nav-simple/src/NavSimple";
import { withKnobs, object, color } from "@storybook/addon-knobs";

export default {
    title: 'Nav/ Nav Simple',
    component: HeaderSimple,
    decorators: [withKnobs]
};

const defaultLinks = [
    {name: "mylink.com", url: "mylink.com", isActive: true},
    {name: "mylink1.com", id: "#test1"},
    {name: "mylink2.com", id: "#test2"},
    {name: "otherlink.net", url: "otherlink.net", target: "_blank"},
    {name: "otherlink1.net", url: "otherlink1.net"}
];

export const Default = () => ({
    components: { HeaderSimple, NavSimple },
    props: {
        color: {
            default: color('Color', '#ff8800', 'Props')
        },
        links: {
            default: object('Links', defaultLinks, 'Links')
        }
    },
    template: `
        <div>
            <header-simple height="80px" fixed :primary="color"> 
                <nav-simple slot="end" :links="links" class="nav" :primary="color"/>
            </header-simple>
            <div id="test1" style="height: 800px">TEST SECTION 1</div>
            <div id="test2" style="height: 800px">TEST SECTION 2</div>
        </div>
    `
});
