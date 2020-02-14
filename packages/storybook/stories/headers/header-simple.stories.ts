// @ts-ignore
import HeaderSimple from "../../../components/header/header-simple/src/HeaderSimple";
// @ts-ignore
import NavItemSimple from "../../../components/header/nav-item-simple/src/NavItemSimple";

export default {
    title: 'Nav/ Nav Simple',
    component: NavItemSimple
};

export const Default = () => ({
    components: { HeaderSimple, NavItemSimple },
    data() {
        return {
            links: [{name: "mylink.com", url: "mylink.com"}, {name: "otherlink.net", url: "otherlink.net"}]
        };
    },
    template: `<header-simple height="80px"
                           fixed
                              primary="#ff0000"
    > 
        <nav-item-simple slot="end" :links="links" class="nav" />
    </header-simple>`
});
