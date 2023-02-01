<script lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import movieRate from "./movie-rate.vue";

export default {
    name: "DetailHeaderComponent",
    props: {
        movie: {
            required: true,
            type: Object,
            default: () => { },
        }
    },
    components: {
        ArrowLeftIcon,
        movieRate
    }
}
</script>
<template>
    <div class="bg-gray rounded py-4 px-20 flex justify-between items-center mb-20">
        <div class="flex items-center">
            <router-link class="rounded-full bg-blue text-white px-3 py-1 flex items-center"
                :to="{ name: 'moviesList' }">
                <arrow-left-icon class="h-4 w-4 mr-1" />
                Back
            </router-link>
            <div class="ml-12">
                <h1 class="text-lg font-bold">{{ movie.title }}</h1>
                <span>{{ movie.tagline }}</span>
            </div>
        </div>
        <movie-rate :movie="movie" />
    </div>
</template>