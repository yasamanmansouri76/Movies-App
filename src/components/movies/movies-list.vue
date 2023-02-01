<script lang="ts">
import movieCard from "./movie-card.vue";

export default {
    name: "MoviesListComponent",
    components: {
        movieCard
    },
    props: {
        movies: {
            required: true,
            type: Object,
            default: () => [],
        }
    }
};
</script>
<template>
    <div class="grid grid-cols-3 gap-y-14 gap-x-20">
        <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
</template>