<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./data/store";
import axios from "axios";
export default {
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    fetchMovies(text) {
      axios
        .get(
          `${store.baseUri}movie?api_key=${store.apiKey}&query=${text}&language=it`
        )
        .then((response) => {
          store.movies = "";
          store.movies = response.data.results;
          console.log(store.movies);
        });
      axios
        .get(
          `${store.baseUri}tv?api_key=${store.apiKey}&query=${text}&language=it`
        )
        .then((response) => {
          store.series = "";
          store.series = response.data.results;
          console.log(store.series);
        });
    },
  },
};
</script>

<template>
  <AppHeader @startSearch="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
//SCSS
</style>