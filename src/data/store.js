import { reactive } from "vue";

export const store = reactive({
  movies: [],
  series: [],
  baseUri: "https://api.themoviedb.org/3/search/",
  apiKey: "c5438c3246d108d7bf5f82a8989ecb2c",
  baseImgUrl: "https://image.tmdb.org/t/p/original",
});
