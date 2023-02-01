<script lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    name: "SearchBoxComponent",
    components: { Datepicker },
    data() {
        return {
            date: [],
        }
    },
};
</script>
<template>
    <div class="bg-gray rounded py-4 px-20 flex justify-between items-center mb-20">
        <div>
            <label>Search by release date: </label>
            <Datepicker v-model="date" class="ml-2 inline-flex" range auto-apply :clearable="false"
                :enable-time-picker="false" />
        </div>
        <button class="rounded-full bg-blue text-white px-2 py-1" @click="$emit('filter', date)">Search</button>
    </div>
</template>
<style lang="scss" scoped>
@import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
</style>