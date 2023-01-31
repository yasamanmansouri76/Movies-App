<script lang="ts">
import movieCard from "./movie-card.vue";

export default {
    name: "MoviesListComponent",
    components: {
        movieCard
    }
};
</script>
<template>
    <div class="grid grid-cols-3 gap-y-14 gap-x-20">
        <movie-card />
    </div>
</template>