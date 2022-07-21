<script setup lang="ts">
import { ref } from "vue";
import VuejsProjectsVue from "@/components/VuejsProjects.vue";
import FileSystemApi from "../components/FileSystemApi.vue";
import ReactjsProjects from "../components/ReactjsProjects.vue";
import AngularjsProjects from "../components/AngularjsProjects.vue";
import MongoDbProjects from "../components/MongoDbProjects.vue";
import ExpressProjects from "../components/ExpressProjects.vue";
import DjangoProjects from "../components/DjangoProjects.vue";
import GameProjects from "../components/GameProjects.vue";
import TechArticles from "../components/TechArticles.vue";
// import ForDummies from "../components/ForDummies.vue";

// const showDummy = ref(false);
// const showDummy2 = ref(false);
</script>

<template>
  <main
    class="dark:bg-slate-500 flex-1 md:w-10/12 lg:w-11/12 place-self-end"
    id="HomeView"
  >
    <body
      class="px-5 md:px-8 lg:px-10 font-normal mt-10 pb-10 md:ml-20 lg:ml-28"
      id="HomeViewBody"
    >
      <section id="welcome" class="italic font-bold md:font-extrabold">
        I'm Eric Nyaga, a passionate, brilliant, hardworking software developer
        and writer at Mount Kenya University.
      </section>
      <section class="space-y-7" id="HomeViewProjects">
        <h1
          id="PROJECTS"
          class="font-extrabold text-3xl md:text-5xl lg:text-7xl py-5 text-cyan-800"
        >
          <a href="#PROJECTS">PROJECTS & PROTOS</a>
        </h1>
        <!-- <ForDummies /> -->
        <VuejsProjectsVue />
        <ReactjsProjects />
        <AngularjsProjects />
        <FileSystemApi />
        <ExpressProjects />
        <MongoDbProjects />
        <DjangoProjects />
        <GameProjects />
      </section>
      <TechArticles />
    </body>
  </main>
</template>

<style>
body ul {
  padding-left: 2rem;
}
</style>
