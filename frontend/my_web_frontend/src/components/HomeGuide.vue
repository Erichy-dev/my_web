<script lang="ts" setup>
import { onMounted, ref } from "vue";

import { MenuIcon } from "@heroicons/vue/solid";

const guide = ref<HTMLElement | null>(null);
let checkGuide = ref<boolean>(true);
function toggleGuide() {
  if (checkGuide.value) {
    guide.value?.classList.remove("hidden");
    guide.value?.classList.add("fixed");
    checkGuide.value = false;
  } else {
    guide.value?.classList.add("hidden");
    guide.value?.classList.remove("fixed");
    checkGuide.value = true;
  }
}
onMounted(() => {
  window.addEventListener("click", outsideToggle);
});
function outsideToggle(e: Event) {
  const toggleGuide = document.getElementsByClassName("toggleGuide")[0];
  const pathElem = document.getElementsByTagName("path")[0];
  if (!checkGuide.value) {
    const guide = document.getElementById("homeGuide");
    if (
      !guide?.contains(e.target as HTMLElement) &&
      e.target != toggleGuide &&
      e.target != pathElem
    ) {
      (guide as HTMLElement).classList.add("hidden");
      (guide as HTMLElement).classList.remove("fixed");
      checkGuide.value = true;
    }
  }
}
</script>
<script></script>
<template>
  <main>
    <MenuIcon
      @click="toggleGuide"
      class="block md:hidden top-1 md:top-10 left-1 w-5 h-5 z-30 text-blue-700 fixed toggleGuide"
    />
    <main
      ref="guide"
      id="homeGuide"
      class="hidden md:block overflow-auto font-semibold text-cyan-700 h-screen px-0 bg-gradient-to-b from-blue-500 to-cyan-200 dark:text-cyan-900 dark:via-orange-300 dark:from-slate-600 dark:to-slate-600 text-lg fixed"
    >
      <div
        class="mt-20 rounded-full shadow-black shadow-lg drop-shadow-2xl p-7"
      >
        <ul class="space-y-6 lg:space-y-8">
          <li><a href="#PROJECTS">PROJECTS</a></li>
          <ul class="pl-2 space-y-4 lg:space-y-6">
            <li><a href="#VueJs">VueJs</a></li>
            <li><a href="#ReactJs">ReactJs</a></li>
            <li><a href="#AngularJs">AngularJs</a></li>
            <li><a href="#Filesystem-API">Filesystem API</a></li>
            <li><a href="#ExpressJs">ExpressJs</a></li>
            <li><a href="#MongoDb">MongoDb</a></li>
            <li><a href="#Django">Django</a></li>
            <li><a href="#GAMES">GAMES</a></li>
          </ul>
          <li><a href="#Tech-Articles"> Tech Articles</a></li>
        </ul>
      </div>
    </main>
  </main>
</template>
