<script lang="ts">
import { mapActions } from "vuex";
import searchBox from "../../components/movies/search-box.vue";
import moviesList from "../../components/movies/movies-list.vue";
import pagination from "../../components/movies/pagination.vue";

export default {
    name: "MoviesComponent",
    data() {
        return {
            movies: [],
            genres: [],
            page: 1,
            totalPages: 0,
            totalResults: 0
        }
    },
    components: {
        searchBox,
        moviesList,
        pagination
    },
    beforeMount() {
        this.loadGenres();
        this.loadMovies();
    },
    methods: {
        ...mapActions({
            getMovies: "movies/getMovies",
            getGenres: "movies/getGenres",
        }),
        loadMovies() {
            const payload = {
                page: this.page
            }
            this.getMovies(payload)
                .then((response) => {
                    this.movies = response.results;
                    this.totalPages = response.total_pages;
                });
        },
        loadGenres() {
            this.getGenres();
        },
        nextPage() {
            this.page++;
            this.loadMovies();
        },
        prevPage() {
            this.page--;
            this.loadMovies();
        }
    }
};
</script>
<template>
    <div>
        <searchBox />
        <movies-list :movies="movies" />
        <pagination class="mt-28" :page="page" :total-pages="totalPages" @next-page="nextPage" @prev-page="prevPage" />
        <p class="mt-8 text-center pb-16 text-gray-500">Showing results {{ page }} - {{ totalPages }}</p>
    </div>
</template>

