<script lang="ts">
export default {
    name: "DetailSectionComponent"
}
</script>
<template>
    <div class="details-section">
        <div class="flex">
            <img class="rounded-lg shadow-xl" src="../../assets/vue.svg" />
            <div class="right-details p-10">
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Budget</span>
                    <span>10000000</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Revenue</span>
                    <span>10000000</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Release Date</span>
                    <span>10000000</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Runtime</span>
                    <span>10000000</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Score</span>
                    <span>10000000</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Genres</span>
                    <span>10000000</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">IMDB Link</span>
                    <span>10000000</span>
                </div>
                <div class="flex justify-between items-center mb-5">
                    <span class="font-bold">Homepage Link</span>
                    <span>10000000</span>
                </div>
            </div>
        </div>
        <p class="text-sm mt-10">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait
            que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en
            soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des
            passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de
            texte, comme Aldus PageMaker
        </p>
        <h5 class="font-bold mt-20 mb-1">Credit:</h5>
        <p class="text-sm">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait
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
}
</style>