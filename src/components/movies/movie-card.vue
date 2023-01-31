<script lang="ts">
import { mapGetters } from "vuex";

export default {
    name: "MovieCardComponent",
    props: {
        movie: {
            required: true,
            type: Object,
            default: () => { },
        }
    },
    computed: {
        ...mapGetters({
            genres: "movies/genres",
        }),
    },
    methods: {
        getGenreName(genreId: number) {
            // console.log(this.genres);
            const genre = this.genres.find((item: object) => item.id === genreId);
            if (genre) {
                return genre.name;
            }
        }
    }
};
</script>
<template>
    <router-link :to="{ name: 'movieDetails', params: { id: movie.id } }">
        <div class="bg-gray-light border-2 border-gray-300 rounded flex movie-card hover:shadow-xl">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="rounded-l">
            <div class="right-details p-3 flex flex-col justify-between ">
                <h1 class="text-lg font-bold">{{ movie.title }}</h1>
                <div class="text-xs">
                    <span class="block mb-3">{{ movie.release_date }}</span>
                    <div>
                        <span v-for="(genre, index) in movie.genre_ids" :key="index">{{ getGenreName(genre) }} * </span>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>
<style lang="scss" scoped>
.movie-card {
    img {
        width: 40%;
        height: 100%;
        object-fit: cover;
    }

    .right-details {
        width: 60%;
    }
}
</style>