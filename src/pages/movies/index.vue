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
                // primary_release_date.gte: this.releaseStartDate,
                // primary_release_date.lte: this.releaseEndDate
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
            const startDate = date[0].toLocaleDateString("en-US").split('/').join('-');
            const endDate = date[1].toLocaleDateString("en-US").split('/').join('-');
            this.releaseStartDate = `${startDate.split('-')[2]}-${startDate.split('-')[0]}-${startDate.split('-')[1]}`;
            this.releaseEndDate = `${endDate.split('-')[2]}-${endDate.split('-')[0]}-${endDate.split('-')[1]}`;

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
        <movies-list v-else :movies="movies" />
        <pagination class="mt-28" :page="page" :total-pages="totalPages" @next-page="nextPage" @prev-page="prevPage" />
        <p class="mt-8 text-center pb-16 text-gray-500">Showing results {{ page }} - {{ totalPages }}</p>
    </div>
</template>

