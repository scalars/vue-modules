<template>
    <div class="vuemodules-typewriter">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: "typewriter",
    props: {
        words: { type: Array, default: () => [] },
        time: { type: Number, default: 2000 },
        pause: { type: Number, default: 2000 },
        blinkTime: { type: Number, default: 500 }
    },
    data() {
        return {
            text: '',
            current: 0,
            delete: false
        };
    },
    mounted () {
        this.type();
    },
    methods: {
        type () {
            if (this.words.length === 0) {
                return setTimeout(this.type, 500);
            }

            const index = this.current % this.words.length;
            const word = this.words[index];

            if (!this.delete) {
                this.text = word.substr(0, this.text.length + 1);
            } else {
                this.text = word.substr(0, this.text.length - 1);
            }

            let time = this.time / word.length;
            if (this.delete) {
                time /= 2;
            }

            if (!this.delete && this.text === word) {
                time = this.pause;
                this.delete = true;
            } else if (this.delete && this.text === '') {
                this.delete = false;
                this.current++;
            }

            setTimeout(this.type, time);
        }
    }
};
</script>
