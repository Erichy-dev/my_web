<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div
    class="flex flex-row h-screen min-h-screen leading-relaxed tracking-wide"
  >
    <NavbarVue />
    <RouterView />
    <FooterVue />
  </div>
</template>

<style>
/* @import "@/assets/base.css"; */
</style>
