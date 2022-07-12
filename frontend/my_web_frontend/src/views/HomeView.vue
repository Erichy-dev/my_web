<script setup lang="ts">
import { ref } from "vue";
import HomeGuide from "../components/HomeGuide.vue";
import VuejsProjectsVue from "@/components/VuejsProjects.vue";
import FileSystemApi from "../components/FileSystemApi.vue";
import ReactjsProjects from "../components/ReactjsProjects.vue";
import AngularjsProjects from "../components/AngularjsProjects.vue";
import MongoDbProjects from "../components/MongoDbProjects.vue";
import ExpressProjects from "../components/ExpressProjects.vue";
import DjangoProjects from "../components/DjangoProjects.vue";
import GameProjects from "../components/GameProjects.vue";
import TechArticles from "../components/TechArticles.vue";

const showDummy = ref(false);
const showDummy2 = ref(false);
</script>

<template>
  <main class="lg:items-start flex flex-row w-full pt-4 dark:bg-slate-500">
    <HomeGuide />

    <body
      class="flex-1 px-10 sm:ml-0 md:ml-40 lg:ml-72 font-normal mt-16 pb-10"
    >
      <section id="welcome" class="text-teal-700 dark:text-slate-900 italic">
        I'm Eric Nyaga, a passionate, brilliant, hardworking software developer
        and writer at Mount Kenya University.
      </section>
      <section class="space-y-7">
        <h1 id="PROJECTS" class="font-extrabold text-3xl py-5 text-emerald-800">
          <a href="#PROJECTS">PROJECTS & PROTOS</a>
        </h1>
        <div class="flex flex-row">
          <div class="flex-1">
            <button
              class="bg-green-200 dark:bg-sky-900 rounded-md"
              @click="showDummy = !showDummy"
            >
              04-07-22
            </button>
            <span class="text-sky-700 dark:text-cyan-200" v-if="showDummy">
              It's been nearly a semester using a 2GB RAM. I've had a breeze
              experience building projects. Often I'd wait minutes and hours for
              the PC to wake from the realms of dormancy. Sadly after covering
              other expenses, I've saved enough to enter the horrors of a 4GB
              RAM.</span
            >
          </div>
          <div class="flex-1">
            <button
              class="bg-green-200 dark:bg-sky-900 rounded-md"
              @click="showDummy2 = !showDummy2"
            >
              12-07-22
            </button>
            <span class="text-sky-700 dark:text-cyan-200" v-if="showDummy2">
              In 8 days I've achieved twice what took me more than 2 months. The
              2GB RAM must have been doing me some hidden favors. I'm Great.</span
            >
          </div>
        </div>
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
