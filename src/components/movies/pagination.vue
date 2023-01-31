<script lang="ts">
export default {
    name: "PaginationComponent",
    props: {
        page: {
            required: true,
            type: Number,
            default: '',
        },
        totalPages: {
            required: true,
            type: Number,
            default: '',
        }
    }
};
</script>
<template>
    <div class="text-center">
        <button :class="page === 1 ? 'disabled text-gray' : 'text-blue'" @click="$emit('prevPage')">
            Previous Page
        </button>
        <span class="text-2xl mx-3">|</span>
        <button :class="page === totalPages ? 'disabled text-gray' : 'text-blue'" @click="$emit('nextPage')">
            Next Page
        </button>
    </div>
</template>