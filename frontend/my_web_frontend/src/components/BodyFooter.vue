<script setup lang="ts">
import {
  MailIcon,
  BriefcaseIcon,
  HeartIcon,
  CloudIcon,
  CloudDownloadIcon,
  PencilIcon,
  UserGroupIcon,
} from "@heroicons/vue/solid";
</script>

<template>
  <main
    class="w-full bg-green-100 border-t bottom-0 md:max-h-40 p-5 mt-0 z-30 flex flex-col dark:bg-slate-500"
  >
    <footer class="flex sm:flex-col md:flex-row font-semibold">
      <a
        class="flex-1 text-sm font-serif"
        href="erichnyaga1@gmail.com"
        target="_blank"
        ><button
          class="hidden md:block transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-orange-800 duration-1000 hover:drop-shadow-lg hover:shadow-black hover:bg-orange-200"
        >
          EMAIL
        </button>
        <MailIcon class="block md:hidden h-5 w-5 text-slate-400"/>
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif"
        href="https://www.fiverr.com/rikidev_"
        target="_blank"
        ><button
          class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-orange-800 duration-1000 hover:drop-shadow-lg hover:shadow-black hover:bg-orange-200 hidden md:block"
        >
          FIVERR
        </button>
        <BriefcaseIcon class="block md:hidden h-5 w-5 text-slate-400"/>
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif"
        href="https://github.com/Erichy-dev"
        target="_blank"
        ><button
          class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-orange-800 duration-1000 hover:drop-shadow-lg hover:shadow-black hover:bg-orange-200 hidden md:block"
        >
          GITHUB
        </button>
        <HeartIcon class="block md:hidden h-5 w-5 text-slate-400" />
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif"
        href="https://stackblitz.com/@Erichy-dev"
        target="_blank"
        ><button
          class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-orange-800 duration-1000 hover:drop-shadow-lg hover:shadow-black hover:bg-orange-200 hidden md:block"
        >
          STACKBLITZ
        </button>
        <CloudIcon class="block md:hidden h-5 w-5 text-slate-400"/>
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif"
        href="https://codepen.io/erichy-dev"
        target="_blank"
        ><button
          class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-orange-800 duration-1000 hover:drop-shadow-lg hover:shadow-black hover:bg-orange-200 hidden md:block"
        >
          CODEPEN
        </button>
        <cloud-download-icon class="block md:hidden h-5 w-5 text-slate-400"/>
      </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif"
        href="https://medium.com/@erichnyaga1"
        target="_blank"
        ><button
          class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-orange-800 duration-1000 hover:drop-shadow-lg hover:shadow-black hover:bg-orange-200 hidden md:block"
        >
          MEDIUM
        </button>
        <pencil-icon class="block md:hidden h-5 w-5 text-slate-400"/>
        </a>
      <a
        class="flex-1 hover:text-orange-800 text-sm font-serif"
        href="https://twitter.com/riki_dev_"
        target="_blank"
        ><button
          class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-orange-800 duration-1000 hover:drop-shadow-lg hover:shadow-black hover:bg-orange-200 hidden md:block"
        >
          TWITTER
        </button>
        <user-group-icon class="block md:hidden h-5 w-5 text-slate-400"/>
      </a>
    </footer>
    <div class="flex-1 self-center text-green-700 dark:text-green-300">
      @Copyright 2022
    </div>
  </main>
</template>
