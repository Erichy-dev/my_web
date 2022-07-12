<script setup lang="ts">
import { SunIcon } from "@heroicons/vue/solid";
import { ref } from "vue";

const bright = ref<boolean>(true);
const dark = ref<boolean>(false);
function toggleLights() {
  toggler(bright.value, dark.value);
}
</script>
<script lang="ts">
//tests
//bright is never equal to dark
//the html collection only has one element.
export function toggler(bright: boolean, dark: boolean) {
  // eslint-disable-next-line no-undef
  let html: HTMLCollectionOf<HTMLHtmlElement> =
    document.getElementsByTagName("html");
  let darkened: string = html[0].className;
  if (darkened === "dark") {
    html[0].className = "";
    bright = true;
    dark = false;
  } else {
    html[0].className = "dark";
    bright = false;
    dark = true;
  }
  return dark === bright;
}
</script>

<template>
  <nav
    id="navbar"
    class="bg-blue-100 w-full top-0 z-20 bg-cover py-1 max-h-20 absolute dark:bg-slate-500"
  >
    <div
      class="w-full flex flex-col items-center justify-between mt-0 px-2 py-2 lg:py-6"
    >
      <div class="pl-4">
        <a
          class="text-blue-900 no-underline hover:no-underline font-black text-4xl"
          href="/"
        >
          DEVRIKI
        </a>
      </div>

    </div>
  </nav>
  <div
    class="absolute md:fixed z-30 m-2 right-0 md:left-24 top-0 md:top-4 w-10"
    @click="toggleLights"
  >
    <SunIcon v-if="bright" class="md:w-10 w-7 md:h-10 h-7 text-amber-400" />
    <SunIcon v-if="dark" class="md:w-10 w-7 md:h-10 h-7 text-slate-800" />
  </div>
</template>
