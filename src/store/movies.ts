import api from "../services/interceptor";

export default {
  namespaced: true,
  state: {
    genres: [],
  },
  getters: {
    genres(state: object) {
      return state.genres;
    },
  },
  mutations: {
    setGenres(state: object, data: any) {
      state.genres = data;
    },
  },
  actions: {
    getMovies(context: object, payload: object) {
      return api
        .get("/discover/movie", {
          params: payload,
        })
        .then((response) => response.data);
    },
    getMovieDetails(context: object, payload: object) {
      return api.get(`/movie/${payload}`).then((response) => response.data);
    },
    getMovieCredits(context: object, payload: object) {
      return api
        .get(`/movie/${payload}/credits`)
        .then((response) => response.data);
    },
    getGenres(context: object, payload: object) {
      return api.get("/genre/movie/list").then((response) => {
        context.commit("setGenres", response.data.genres);
      });
    },
  },
};
