<script lang="ts">
import { mapActions } from "vuex";
import searchBox from "../../components/movies/search-box.vue";
import moviesList from "../../components/movies/movies-list.vue";
import pagination from "../../components/movies/pagination.vue";
import loading from "../../components/shared/loading.vue";

export default {
    name: "MoviesComponent",
    data() {
        return {
            movies: [],
            genres: [],
            page: 1,
            totalPages: 0,
            totalResults: 0,
            loadingMovies: true,
            releaseStartDate: '',
            releaseEndDate: ''
        }
    },
    components: {
        searchBox,
        moviesList,
        pagination,
        loading
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
            this.loadingMovies = true;

            const payload = {
                page: this.page,
                'primary_release_date.lte': this.releaseEndDate,
                'primary_release_date.gte': this.releaseStartDate
            }
            this.getMovies(payload)
                .then((response) => {
                    this.movies = response.results;
                    this.totalPages = response.total_pages;
                    this.loadingMovies = false;
                });
        },
        loadGenres() {
            this.getGenres();
        },
        filterMovies(date: Array) {
            this.releaseStartDate = new Date(date[0]).toISOString().slice(0, 10);
            this.releaseEndDate = new Date(date[1]).toISOString().slice(0, 10);
            this.loadMovies()

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
        <searchBox @filter="filterMovies" />
        <loading v-if="loadingMovies" />
        <span v-else-if="movies.length <= 0" class="block text-center">No movie was found!</span>
        <movies-list v-else :movies="movies" />
        <pagination class="mt-28" :page="page" :total-pages="totalPages" @next-page="nextPage" @prev-page="prevPage" />
        <p class="mt-8 text-center pb-16 text-gray-500">Showing results {{ page }} - {{ totalPages }}</p>
    </div>
</template>

