
<script lang="ts">
import { mapActions } from "vuex";
import detailHeader from "../../components/movies/detail-header.vue";
import detailSection from "../../components/movies/detail-section.vue";
import loading from "../../components/shared/loading.vue";

export default {
    name: "MovieDetailsComponent",
    data() {
        return {
            movieId: this.$route.params.id,
            movie: {},
            credits: [],
            loadingDetails: true
        }
    },
    components: {
        detailHeader,
        detailSection,
        loading
    },
    beforeMount() {
        this.loadMovieDetails();
    },
    methods: {
        ...mapActions({
            getMovieDetails: "movies/getMovieDetails",
            getMovieCredits: "movies/getMovieCredits"
        }),
        loadMovieDetails() {
            this.loadingDetails = true;
            this.getMovieDetails(this.movieId)
                .then((response) => {
                    this.movie = response;
                    this.loadingDetails = false;
                })
            this.getMovieCredits(this.movieId)
                .then((response) => {
                    this.credits = response.cast.sort((a: object, b: object) => b.popularity - a.popularity);
                })
        }
    }
}
</script>
<template>
    <loading v-if="loadingDetails" />
    <div v-else>
        <detail-header :movie="movie" />
        <detail-section :movie="movie" :credits="credits" />
    </div>
</template>
