<template>
    <div class="card004-container" :style="{width, height, borderRadius}">
        <simple-card
            :primary="backgroundFooter"
            background="#eee"
            :footer-visible="true"
            :footer-overlaped="false"
            :style="{fontSize: fontSize}"
            class="simple-card"
        >
            <div slot="background" class="background" :style="{backgroundImage: `url(${img})`}"/>
            <div slot="footer" :style="{padding, color}">
                <div class="options">
                    <h3 class="title" v-html="item.title" :style="{ color: accent }"/>
                </div>
                <div class="options2">
                    <span class="price">${{item.price}}</span>
                    <span class="description" :style="{color: accent}">{{item.description}}</span>
                </div>
                <div class="buttons" :style="{color: titleColor}">
                    <div class="total"  
                        :style="{backgroundColor: accent, borderRadius, color: titleColor}" 
                        v-if="icon && !icon2"
                        v-html="icon"
                    />
                    <div class=" total"  
                        :style="{backgroundColor: accent, borderRadius, color: titleColor}"
                        v-if="!icon && icon2"
                        v-html="icon2"
                    />
                    <div class="button"  
                        :style="{backgroundColor: accent, borderRadius, color: titleColor}" 
                        v-if="icon && icon2"
                        v-html="icon"
                    />
                    <div class="button"  
                        :style="{backgroundColor: accent, borderRadius, color: titleColor}" 
                        v-if="icon && icon2"
                        v-html="icon2"
                    />
                </div>
                <div><span class="place">{{item.restaurant}}</span></div>
            </div>
        </simple-card>    
    </div>
</template>

<script>
import SimpleCard from '@vuemodules/simple-card';

export default {
    name: "card004",
    components: {
        SimpleCard
    },
    props: {
        item: { required: true, type: Object },
        img: { required: true, type: String },
        icon: { type: String },
        icon2: { type: String },
        width: { default: '250px' },
        height: { default: '300px' },
        fontSize: { default: '1em' },
        color: { default: '#000' },
        titleColor: { default: '#fff' },
        borderRadius: { default: '8px' },
        accent: { default:  'teal' },
        backgroundFooter: { default: '#fff' },
        padding: { default: '15px' },
        button : { default: '0 0 8px 8px'}
    }
};
</script>
<style lang="scss" scoped>
.card004-container {
    overflow: hidden;
    position: relative;
}
.simple-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.background {
    width: 100%;
    height: auto;
    background-position: center;
    background-size: cover;
    flex: 1 1 auto;
}
.options {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    .title {
        font-size: 1em;font-size: 1em;font-size: 1em;
        margin: 0;
        padding: 0; 
    }   

} 

.options2{
    display: flex;
    padding-bottom: 15px;
    .description {
        margin-left:20px;
        font-size: 0.9em;
    }
}
    

.buttons {
    width: 100%;
    display: flex;
    text-align: center;
    padding-bottom: 15px;
    justify-content: space-between;

    .button {
        width: 47%;
        align-items: center;
        justify-content: center;
    }
    .total {
        width: 100%;
        height: 30px;
    }

}

.place{
    font-size: 0.8em;
}
</style>
