<script>
import Card from "./SingleCard.vue";
import { store } from "../data/store"
export default {
    data() {
        return {
            store,
            baseUrlImg: "https://image.tmdb.org/t/p/original",
        };
    },
    components: {
        Card,
    },
};
</script>

<template>
    <!-- PARTE FILM -->
    <div class="card-list py-3">
        <div class="container-fluid">
            <h2 v-if="(!store.movies.length || !store.series.length)" class="text-center">Use Search Bar to start research!
            </h2>
            <div class="row">
                <h2 v-if="(store.movies.length)">FILM</h2>
                <Card v-for="movie in store.movies" :copertina="`${baseUrlImg}${movie.poster_path}`" :titolo="movie.title"
                    :lingua="movie.original_language" :desc="movie.overview"></Card>
            </div>
            <div class="row mt-5">
                <h2 v-if="(store.series.length)">SERIE TV</h2>
                <Card v-for="serie in store.series" :copertina="`${baseUrlImg}${serie.poster_path}`"
                    :titolo="serie.original_name" :lingua="serie.original_language" :desc="serie.overview"></Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
//SCSS
</style>