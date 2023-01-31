<script lang="ts">
export default {
    name: "MovieCardComponent"
};
</script>
<template>
    <div class="bg-gray-light border-2 border-gray-300 rounded flex movie-card">
        <img src="../../assets/vue.svg" class="rounded-l">
        <div class="right-details p-3 flex flex-col justify-between ">
            <h1 class="text-lg font-bold">title</h1>
            <div class="text-xs">
                <span class="block mb-3">2014-11-08</span>
                <div>
                    <span>test</span> --
                    <span>test</span>
                </div>
            </div>
        </div>
    </div>
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