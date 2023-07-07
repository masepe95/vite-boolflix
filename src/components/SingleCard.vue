<script>
export default {
    data() {
        return {
        };

    },
    props: {
        titolo: String,
        originale: String,
        lingua: String,
        copertina: String,
        desc: String,
        vote: Number
    },
    computed: {
        roundedVote() {
            const vote = this.vote;
            return Math.ceil(vote) / 2;
        },
        hasFlag() {
            const availableFlags = ['it', 'en'];
            return availableFlags.includes(this.lingua);
        },
        flagSrc() {
            const url = new URL(`../public/img/${[this.lingua]}.png`, import.meta.url);
            return url.href
        }
    },
    methods: {
        iconClass(n) {
            return n <= this.roundedVote ? 'fas' : 'far';
        }
    }
}
</script>

<template>
    <div class="col-xxl-2 col-md-3 col-sm-6 py-2">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="copertina" alt="NO PICTURE" />
                </div>
                <div class="flip-card-back px-2">
                    <h1>{{ titolo }}</h1>
                    <img v-if="hasFlag" :src="flagSrc" :alt="this.lingua">
                    <span v-else> {{ lingua }}</span>
                    <p> <font-awesome-icon v-for="n in 5" :key="n" :icon="[iconClass(n), 'star']" /> </p>
                    <p>{{ desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
//SCSS
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.flip-card {
    background-color: transparent;
    // width: 300px;
    height: 400px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: #000000;
    color: white;
    transform: rotateY(180deg);
    overflow: auto;
}
</style>