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
        <MailIcon class="w-6/12 text-slate-400 self-center" />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://www.fiverr.com/rikidev_"
        target="_blank"
      >
        <img src="/fiverr.png" class="w-6/12 text-slate-400 self-center" />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://github.com/Erichy-dev"
        target="_blank"
      >
        <img src="/github.png" class="w-6/12 text-slate-400 self-center" />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://stackblitz.com/@Erichy-dev"
        target="_blank"
      >
        <img
          src="/stackblitz.png"
          class="h-4/6 w-5/12 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://codepen.io/erichy-dev"
        target="_blank"
      >
        <img
          src="/codepen.png"
          class="h-5/6 w-5/12 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://medium.com/@erichnyaga1"
        target="_blank"
      >
        <img src="/medium.png" class="w-6/12 text-slate-400 self-center" />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://twitter.com/riki_dev_"
        target="_blank"
      >
        <img
          src="/twitter.png"
          class="w-5/12 h-5/6 text-slate-400 self-center"
        />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif flex flex-col"
        href="https://wa.me/+254795829177"
        target="_blank"
      >
        <img src="/whatsapp.png" class="w-6/12 text-slate-400 self-center" />
      </a>
    </footer>
    <div class="flex-1 self-center text-green-700 dark:text-green-300">
      @Copyright 2022
    </div>
  </main>
</template>
