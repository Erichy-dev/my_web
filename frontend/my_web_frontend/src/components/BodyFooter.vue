<script setup lang="ts">
import { MailIcon } from "@heroicons/vue/solid";
</script>

<template>
  <main
    class="w-full bg-cyan-200 border-t bottom-0 md:max-h-40 p-5 mt-0 z-30 flex flex-col dark:bg-slate-500"
    id="FooterSection"
  >
    <footer class="flex flex-row font-semibold">
      <a
        class="flex-1 text-sm font-serif flex flex-col"
        href="mailto:erichnyaga1@gmail.com"
        target="_blank"
      >
        <MailIcon class="h-5 w-5 md:h-11 md:w-11 text-slate-400 self-center" />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://www.fiverr.com/rikidev_"
        target="_blank"
      >
        <img
          src="/fiverr.png"
          class="h-5 w-5 md:h-16 md:w-16 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://github.com/Erichy-dev"
        target="_blank"
      >
        <img
          src="/github.png"
          class="h-5 w-5 md:h-16 md:w-16 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://stackblitz.com/@Erichy-dev"
        target="_blank"
      >
        <img
          src="/stackblitz.png"
          class="h-5 w-5 md:h-11 md:w-11 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://codepen.io/erichy-dev"
        target="_blank"
      >
        <img
          src="/codepen.png"
          class="h-5 w-5 md:h-14 md:w-14 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://medium.com/@erichnyaga1"
        target="_blank"
      >
        <img
          src="/medium.png"
          class="h-5 w-5 md:h-14 md:w-14 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://twitter.com/riki_dev_"
        target="_blank"
      >
        <img
          src="/twitter.png"
          class="h-5 w-5 md:h-12 md:w-12 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://wa.me/+254795829177"
        target="_blank"
      >
        <img
          src="/whatsapp.png"
          class="h-5 w-5 md:h-16 md:w-16 text-slate-400 self-center"
        />
      </a>
    </footer>
    <div class="flex-1 self-center text-green-700 dark:text-green-300">
      @Copyright 2022
    </div>
  </main>
</template>
