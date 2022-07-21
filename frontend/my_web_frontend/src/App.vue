<script setup lang="ts">
import { RouterView } from "vue-router";
import BodyFooter from "./components/BodyFooter.vue";
import BodyNavbar from "./components/BodyNavbar.vue";
import HomeGuide from "./components/HomeGuide.vue";
</script>

<template>
  <main
    id="app"
    class="flex flex-row min-h-screen leading-relaxed tracking-wide text-xl"
  >
    <HomeGuide />
    <div class="flex flex-col">
      <BodyNavbar />
      <RouterView />
      <BodyFooter />
    </div>
  </main>
</template>

<style>
/* @import "@/assets/base.css"; */
li {
  list-style: inside;
}
</style>
