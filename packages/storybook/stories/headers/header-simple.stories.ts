// @ts-ignore
import HeaderSimple from "../../../components/header/header-simple/src/HeaderSimple";
// @ts-ignore
import NavSimple from "../../../components/header/nav-simple/src/NavSimple";

export default {
    title: 'Nav/ Nav Simple',
    component: HeaderSimple
};

export const Default = () => ({
    components: { HeaderSimple, NavSimple },
    data() {
        return {
            links: [{name: "mylink.com", url: "mylink.com"}, {name: "otherlink.net", url: "otherlink.net"}]
        };
    },
    template: `<header-simple height="80px"
                                fixed
                              primary="#ff0000"
    > 
        <nav-simple slot="end" :links="links" class="nav" />
    </header-simple>`
});
