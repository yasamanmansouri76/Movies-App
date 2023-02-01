<script lang="ts">
export default {
    name: "RateComponent",
    data() {
        return {
            rate: 0
        }
    },
    props: {
        movie: {
            required: true,
            type: Object,
            default: () => { },
        }
    },
    beforeMount() {
        this.calculateRate();
    },
    methods: {
        calculateRate() {
            this.rate = Math.floor((this.movie.vote_average * 5) / 10);
        }
    }
}
</script>
<template>
    <div class="rating flex justify-end">
        <span class="rating-num mr-2">{{ parseFloat(movie.vote_average).toFixed(2) }}</span>
        <div>
            <div class="rating-stars">
                <span v-for="(star, index) in 5" :key="index">
                    <i class="icon-star" :class="index < rate ? 'active' : ''"></i>
                </span>
            </div>
            <div class="rating-users">
                <i class="icon-user"></i> {{ movie.vote_count }} total
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400);
@import url(https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

.rating {
    float: left;
    width: 45%;
    margin-right: 5%;
    text-align: center;

    .rating-num {
        color: black;
        font-size: 72px;
        font-weight: 100;
        line-height: 1em;
    }

    .rating-stars {
        font-size: 20px;
        color: gray;
        margin-bottom: .5em;
    }

    .rating-stars .active {
        color: yellow;
    }

    .rating-users {
        font-size: 14px;
    }
}
</style>