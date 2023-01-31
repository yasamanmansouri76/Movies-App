<script lang="ts">
import searchBox from "../../components/movies/search-box.vue";
import moviesList from "../../components/movies/movies-list.vue";
import pagination from "../../components/movies/pagination.vue";

export default {
    name: "MoviesComponent",
    components: {
        searchBox,
        moviesList,
        pagination
    }
};
</script>
<template>
    <div>
        <searchBox />
        <movies-list />
        <pagination class="mt-28" />
        <p class="mt-8 text-center pb-16 text-gray-500">Showing results 1-20</p>
    </div>
</template>

