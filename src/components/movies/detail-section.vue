<script lang="ts">
import constants from "../../constants/index";

export default {
    name: "DetailSectionComponent",
    data() {
        return {
            constants: constants,
            minutes: 0
        }
    },
    props: {
        movie: {
            required: true,
            type: Object,
            default: () => { },
        },
        credits: {
            required: true,
            type: Array,
            default: () => [],
        }
    },
    methods: {
        formatNumber(num: number) {
            return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
        },
        calculateRuntime(time: any) {
            if (time > 0) {
                const completeTime = time / 60;
                const hour = completeTime.toString().split('.')[0];
                let minutes = completeTime.toString().split('.')[1].substring(0, 2);
                this.minutes = +(`0.${minutes}`);
                this.minutes = this.minutes * 60;
                return [+(hour), Math.floor(this.minutes)];
            } else {
                return time;
            }

        }
    }
}
</script>
<template>
    <div class="details-section">
        <div class="flex">
            <img :src="constants.IMG_BASE_URL + movie.poster_path" class="rounded-lg shadow-xl" />
            <div class="right-details p-10">
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Budget</span>
                    <span>${{ formatNumber(movie.budget) }}</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Revenue</span>
                    <span>${{ formatNumber(movie.revenue) }}</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Release Date</span>
                    <span>{{ movie.release_date }}</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Runtime</span>
                    <span>{{ calculateRuntime(movie.runtime)[0] }}h, {{ calculateRuntime(movie.runtime)[1] }}m</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Score</span>
                    <span>{{ movie.vote_average }} ({{ movie.vote_count }} votes)</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Genres</span>
                    <div>
                        <span v-for="(genre, index) in movie.genres" :key="index">
                            {{ genre.name }}
                            <span v-show="index < movie.genres.length - 1">, </span>
                        </span>
                    </div>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">IMDB Link</span>
                    <a :href="constants.IMDB_BASE_URL + movie.imdb_id">Link</a>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Homepage Link</span>
                    <a :href="movie.homepage">Link</a>
                </div>
            </div>
        </div>
        <p class="text-sm mt-10">
            {{ movie.overview }}
        </p>
        <h5 class="font-bold mt-20 mb-1">Credit:</h5>
        <p class="text-sm mb-20">
            <span v-for="(credit, index) in credits" :key="index">
                <span v-show="index < 10">{{ credit.name }} </span>
                <span v-show="index < 9">, </span>
            </span>
            <span v-show="credits.length > 10"> and {{ credits.length - 10 }} more. </span>
        </p>
    </div>

</template>
<style lang="scss" scoped>
.details-section {
    img {
        width: 30%;
        height: 100%;
        object-fit: cover;
    }

    .right-details {
        width: 70%;
    }

    a {
        color: blue;
    }
}
</style>