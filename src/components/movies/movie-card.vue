<script lang="ts">
import { mapGetters } from "vuex";
import { CalendarIcon } from '@heroicons/vue/24/solid'
import constants from "../../constants/index";

export default {
    name: "MovieCardComponent",
    data() {
        return {
            constants: constants
        }
    },
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
    components: {
        CalendarIcon
    },
    methods: {
        getGenreName(genreId: number) {
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
            <img :src="constants.IMG_BASE_URL + movie.poster_path" class="rounded-l">
            <div class="right-details p-3 flex flex-col justify-between ">
                <h1 class="text-lg font-bold">{{ movie.title }}</h1>
                <div class="text-xs">
                    <span class="flex items-center mb-3">
                        <calendar-icon class="h-4 w-4 mr-1" />
                        {{ movie.release_date }}</span>
                    <div>
                        <span v-for="(genre, index) in movie.genre_ids" :key="index">
                            {{ getGenreName(genre) }}
                            <span v-show="index < movie.genre_ids.length - 1">• </span>
                        </span>
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
        height: 245px;
    }

    .right-details {
        width: 60%;
    }
}
</style>