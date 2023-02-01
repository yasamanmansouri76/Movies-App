
<script lang="ts">
import { mapActions } from "vuex";
import detailHeader from "../../components/movies/detail-header.vue";
import detailSection from "../../components/movies/detail-section.vue";

export default {
    name: "MovieDetailsComponent",
    data() {
        return {
            movieId: this.$route.params.id,
            movie: {},
            credits: []
        }
    },
    components: {
        detailHeader,
        detailSection
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
            this.getMovieDetails(this.movieId)
                .then((response) => {
                    this.movie = response;
                })
            this.getMovieCredits(this.movieId)
                .then((response) => {
                    this.credits = response.cast.concat(response.crew);
                })
        }
    }
}
</script>
<template>
    <div>
        <detail-header :movie="movie" />
        <detail-section :movie="movie" :credits="credits" />
    </div>
</template>
