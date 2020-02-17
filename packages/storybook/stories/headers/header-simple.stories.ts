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
            links: [
                {name: "mylink.com", url: "mylink.com", isActive: true},
                {name: "mylink1.com", id: "#test1"},
                {name: "mylink2.com", id: "#test2"},
                {name: "otherlink.net", url: "otherlink.net", target: "_blank"},
                {name: "otherlink1.net", url: "otherlink1.net"}
                ]
        };
    },
    template: `
        <div>
            <header-simple height="80px" fixed primary="#ff0000"> 
                <nav-simple slot="end" :links="links" class="nav" />
            </header-simple>
            <div id="test1" style="height: 800px">TEST SECTION 1</div>
            <div id="test2" style="height: 800px">TEST SECTION 2</div>
        </div>
    `
});
