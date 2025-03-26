<template>
  <div id="main">
    <hah-header />
    <section>
      <router-view />
    </section>
  </div>
</template>
<script>
import HahHeader from "@/components/HahHeader.vue";
export default {
  components: {
    HahHeader,
  },
};
</script>
