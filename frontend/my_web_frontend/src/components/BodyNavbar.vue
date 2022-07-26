<script setup lang="ts">
import { SunIcon } from "@heroicons/vue/solid";
import { ref } from "vue";

const bright = ref<boolean>(true);
const dark = ref<boolean>(false);
function toggleLights() {
  toggler(bright, dark);
}
</script>
<script lang="ts">
import type { Ref } from "vue";
//tests
//bright is never equal to dark
//the html collection only has one element.
export function toggler(bright: Ref<boolean>, dark: Ref<boolean>): boolean {
  // eslint-disable-next-line no-undef
  let html: HTMLCollectionOf<HTMLHtmlElement> =
    document.getElementsByTagName("html");
  let darkened: string = html[0].className;
  if (darkened === "dark") {
    html[0].className = "";
    bright.value = true;
    dark.value = false;
  } else {
    html[0].className = "dark";
    bright.value = false;
    dark.value = true;
  }
  return dark.value === bright.value;
}
</script>

<template>
  <main class="flex-1 flex flex-row dark:bg-slate-500">
    <nav id="navbar" class="flex-1 flex flex-col">
      <div class="p-4 lg:my-4 self-end lg:w-8/12 md:w-7/12">
        <a
          class="shadow-black shadow-lg drop-shadow-2xl text-blue-600 no-underline hover:no-underline font-black text-3xl md:text-7xl lg:text-8xl"
          href="/"
        >
          DEV_RIKI
        </a>
      </div>
    </nav>
    <div class="self-center mr-10" @click="toggleLights">
      <img src="/external-light.png" v-if="bright" class="w-4/12 h-3/6" />
      <img src="/external-dark.png" v-if="dark" class="w-4/12 h-3/6" />
    </div>
  </main>
</template>
