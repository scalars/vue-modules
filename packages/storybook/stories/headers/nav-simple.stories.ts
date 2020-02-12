// @ts-ignore
import NavSimple from "../../../components/header/nav-simple/src/NavSimple";

export default {
    title: 'Nav/ Nav Simple',
    component: NavSimple
};

export const Default = () => ({
    components: { NavSimple },
    template: `<nav-simple height="80px"
                           fixed
                           class="header"> 
        <div>Hello world</div>
    </nav-simple>`
});
