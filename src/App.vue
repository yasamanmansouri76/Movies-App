<script lang="ts">
import layout from "./layouts/index.vue";
export default {
  components: {
    layout
  }
}
</script>

<template>
  <layout />
  <div class="container mx-auto px-12">
    <router-view />
  </div>
</template>