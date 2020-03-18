// @ts-ignore
import MinimalistUser from "../../../components/widget/minimalist-user/src/MinimalistUser.vue";

export default {
    title: 'widget/MinimalistUser',
    component: MinimalistUser
};

export const Default = () => ({
    components: { MinimalistUser },
    template: `<minimalist-user img="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083386_960_720.jpg">
        <h3 style="font-size: 1em; font-weight: bold; margin: 0;">User</h3>
        <span style="font-size: 0.8em;">27 Sep 2019</span>
    </minimalist-user>`
});
