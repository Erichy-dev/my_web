<script setup lang="ts">
import { RouterView } from "vue-router";
import BodyFooter from "./components/BodyFooter.vue";
import BodyNavbar from "./components/BodyNavbar.vue";
</script>

<template>
  <div
    class="flex flex-col h-screen min-h-screen leading-relaxed tracking-wide"
  >
    <BodyNavbar  />
    <RouterView  />
    <BodyFooter />
  </div>
</template>

<style>
/* @import "@/assets/base.css"; */
</style>
