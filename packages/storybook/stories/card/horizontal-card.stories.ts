// @ts-ignore
import HorizontalCard from "@vuemodules/horizontal-card";

export default {
    title: 'Card/Horizontal Card',
    component: HorizontalCard
};

export const Default = () => ({
    components: { HorizontalCard },
    template: '<horizontal-card :images="images"><h1>Title</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi consequuntur cum debitis deserunt et eum explicabo fugiat hic illum, in laboriosam nobis pariatur perferendis placeat suscipit tempore? Iusto, reiciendis.</p></horizontal-card>',
    data: () => ({
        images: [
            'https://cdn.pixabay.com/photo/2019/06/22/18/26/woman-4292185_960_720.jpg',
            'https://cdn.pixabay.com/photo/2020/02/03/17/49/love-4816282_960_720.jpg'
        ]
    })
});
