<script lang="ts" setup>
import { ref } from "vue";

import { MenuIcon } from "@heroicons/vue/solid";

const guide = ref<HTMLElement | null>(null);
let checkGuide = ref<boolean>(true);
function toggleGuide() {
  if (checkGuide.value) {
    guide.value?.classList.remove("hidden");
    checkGuide.value = false;
  } else {
    guide.value?.classList.add("hidden");
    checkGuide.value = true;
  }
}
// window.addEventListener("click", guideOutOfFocus);
// function guideOutOfFocus(){
//   if (checkGuide.value === false) {
//     guide.value?.classList.add("hidden");
//     checkGuide.value = true;
//   }
//   window.removeEventListener("click", guideOutOfFocus)
// }
</script>
<template>
  <main>
    <MenuIcon
      @click="toggleGuide"
      class="block md:hidden top-1 md:top-10 left-1 w-5 h-5 z-30 text-pink-800 fixed"
    />
    <main
      ref="guide"
      class="overflow-scroll hidden md:block border-r-2 px-2 font-semibold text-cyan-500 h-screen lg:px-16 fixed bg-slate-100 top-0 dark:bg-slate-500 dark:text-cyan-900 dark:border-none"
    >
      <div class="mt-20">
        <ul class="space-y-14">
          <li><a href="#PROJECTS">PROJECTS</a></li>
          <ul class="pl-2 space-y-12">
            <li><a href="#VueJs">VueJs</a></li>
            <li><a href="#Filesystem-API">Filesystem API</a></li>
            <li><a href="#ExpressJs">ExpressJs</a></li>
            <li><a href="#Django">Django</a></li>
            <li><a href="#GAMES">GAMES</a></li>
          </ul>
          <li><a href="#Tech-Articles"> Tech Articles</a></li>
        </ul>
      </div>
    </main>
  </main>
</template>
