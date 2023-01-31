
<script lang="ts">
import detailHeader from "../../components/movies/detail-header.vue";
import detailSection from "../../components/movies/detail-section.vue";

export default {
    name: "MovieDetailsComponent",
    components: {
        detailHeader,
        detailSection
    }
}
</script>
<template>
    <div>
        <detail-header />
        <detail-section />
    </div>
</template>
