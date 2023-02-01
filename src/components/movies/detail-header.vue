<script lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'

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
        ArrowLeftIcon
    }
}
</script>
<template>
    <div class="bg-gray rounded py-4 px-20 flex items-center mb-20">
        <router-link class="rounded-full bg-blue text-white px-3 py-1 flex items-center" :to="{ name: 'moviesList' }">
            <arrow-left-icon class="h-4 w-4 mr-1" />
            Back
        </router-link>
        <div class="ml-12">
            <h1 class="text-lg font-bold">{{ movie.title }}</h1>
            <span>{{ movie.tagline }}</span>
        </div>
    </div>
</template>