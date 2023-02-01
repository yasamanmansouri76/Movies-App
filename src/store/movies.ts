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
        .get("/discover/movie?api_key=612ccb541a136afca339984ccf0f91e9", {
          params: payload,
        })
        .then((response) => response.data);
    },
    getMovieDetails(context: object, payload: object) {
      return api
        .get(`/movie/${payload}?api_key=612ccb541a136afca339984ccf0f91e9`)
        .then((response) => response.data);
    },
    getMovieCredits(context: object, payload: object) {
      return api
        .get(
          `/movie/${payload}/credits?api_key=612ccb541a136afca339984ccf0f91e9`
        )
        .then((response) => response.data);
    },
    getGenres(context: object, payload: object) {
      return api
        .get("/genre/movie/list?api_key=612ccb541a136afca339984ccf0f91e9")
        .then((response) => {
          context.commit("setGenres", response.data.genres);
        });
    },
  },
};
