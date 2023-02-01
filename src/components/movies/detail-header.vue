<script lang="ts">
export default {
    name: "DetailHeaderComponent",
    props: {
        movie: {
            required: true,
            type: Object,
            default: () => { },
        }
    }
}
</script>
<template>
    <div class="bg-gray rounded py-4 px-20 flex items-center mb-20">
        <router-link class="rounded-full bg-blue text-white px-2 py-1" :to="{ name: 'moviesList' }">
            Back
        </router-link>
        <div class="ml-12">
            <h1 class="text-lg font-bold">{{ movie.title }}</h1>
            <span>{{ movie.tagline }}</span>
        </div>
    </div>
</template>