<script setup lang="ts">
import { ref } from "vue";
import HomeGuide from "../components/HomeGuide.vue";
import { MenuIcon } from "@heroicons/vue/solid"

const showDummy = ref(false);
</script>

<template>
  <main class="lg:items-start flex flex-row w-full pt-4 dark:bg-slate-500">
    <HomeGuide />

    <body
      class="flex-1 px-10 sm:ml-0 md:ml-40 lg:ml-72 font-normal mt-16 pb-10"
    >
      <section id="welcome" class="text-teal-700 dark:text-slate-900 italic"
        >I'm Eric Nyaga, a passionate, brilliant, hardworking software developer
        and writer at Mount Kenya University.
      </section>
      <section class="space-y-7">
        <h1 id="PROJECTS" class="font-extrabold text-3xl py-5 text-emerald-800">
          <a href="#PROJECTS">PROJECTS & PROTOS</a>
        </h1>
        <button
          class="bg-green-200 dark:bg-sky-900 rounded-md"
          @click="showDummy = !showDummy"
        >
          04-07-22
        </button>
        <span class="text-sky-700 dark:text-cyan-200" v-if="showDummy">
          It's been nearly a semester using a 2GB RAM. I've had a breeze
          experience building projects. Often I'd wait minutes and hours for the
          PC to wake from the realms of dormancy. Sadly after covering other
          expenses, I've saved enough to enter the horrors of a 4GB RAM.</span
        >
        <section id="VueJs">
          <h2 class="font-bold text-2xl text-blue-600 dark:text-blue-900">
            <a href="#VueJs">VueJs</a>
          </h2>
          <div>
            This website uses VueJs. An incredibly dynamic framework for SPAs.
            Vue is an incredible hybrid of React and Angular.<br />
            <section class="projects">
              <h3 id="vue-projects" class="font-bold text-xl">Vue Projects</h3>
              <ul class="">
                <li>
                  Cloned React Tutorial app.<a
                    href="https://stackblitz.com/edit/vitejs-vite-gz1eeu?terminal=dev"
                  >
                    StackBlitz-link. </a
                  >Perfect practice on
                  <span class="italic text-green-700 dark:text-black dark:font-bold"
                    >props, events, setup function, watchers,
                    transition-animation, parent-child relationships.</span
                  >
                  The app displays Vue's strengths over React. The react
                  tutorial app has quite a number of bugs.Try comparing
                  <a
                    class="text-orange-800 dark:text-pink-900"
                    href="https://stackblitz.com/edit/vitejs-vite-gz1eeu?terminal=dev"
                    >my-vue-app</a
                  >
                  with
                  <a
                    class="text-orange-800 dark:text-pink-900"
                    href="https://codepen.io/gaearon/pen/gWWZgR?editors=0010"
                    >react's-app. </a
                  ><a
                    class="text-orange-800 dark:text-pink-900"
                    href="https://github.com/Erichy-dev/Vue-Practices/tree/main/projects/Clone-React"
                    target="_blank"
                    >link-to-github</a
                  >
                </li>
                <li>
                  Practice on props.
                  <a
                    class="text-orange-800 dark:text-pink-900"
                    href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice1"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on event-handlers.
                  <a
                    class="text-orange-800 dark:text-pink-900"
                    href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice2"
                    target="_blank"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on transition-animation.
                  <a
                    class="text-orange-800 dark:text-pink-900"
                    href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice4"
                    target="_blank"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on attribute-builtins.
                  <a
                    class="text-orange-800 dark:text-pink-900"
                    href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice3"
                    target="_blank"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on provide-inject.
                  <a
                    class="text-orange-800 dark:text-pink-900"
                    href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice5"
                    target="_blank"
                    >Github-link</a
                  >
                </li>
              </ul>
            </section>
            <section class="vue-goals">
              <h4 class="font-bold text-lg">Vue Goals</h4>
              <ul>
                <li>
                  Merge the filesystem api I created to display size of folders
                  in a directory. The api should use promises.
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section id="Filesystem-API">
          <h2 class="font-bold text-xl text-blue-600 dark:text-blue-900">
            <a href="#Filesystem-API">Filesystem API</a>
          </h2>
          <p>
            A simple project to play with the filesystem API nodeJs provides.
            The program determines the size of a directory. The project's
            inspiration is the lack of an ability to sort folders based on their
            size. At least not on my phone or PC. Folders, unlike files, do not
            have a size attribute.
            <a
              class="text-orange-800 dark:text-pink-900"
              href="https://github.com/Erichy-dev/fileapi"
              target="_blank"
              >Github-link</a
            >
          </p>
        </section>
        <section>
          <h2
            id="ExpressJs"
            class="font-bold text-2xl text-blue-600 dark:text-blue-900"
          >
            <a href="#ExpressJs">ExpressJs</a>
          </h2>
          <section class="projects">
            <h3 id="express-projects" class="font-bold text-xl">
              Express Projects
            </h3>
            <ul>
              <li>
                Routes & Middleware
                <a
                  class="text-orange-800 dark:text-pink-900"
                  href="https://github.com/Erichy-dev/ExpressJs-practices/tree/master/play01"
                  target="_blank"
                  >Github-link</a
                >
              </li>
              <li>
                Routes & Middleware
                <a
                  class="text-orange-800 dark:text-pink-900"
                  href="https://github.com/Erichy-dev/ExpressJs-practices/tree/master/play02"
                  target="_blank"
                  >Github-link</a
                >
              </li>
            </ul>
          </section>
        </section>
        <section>
          <h2
            id="MongoDb"
            class="font-bold text-2xl text-blue-600 dark:text-blue-900"
          >
            <a href="#MongoDb">MongoDb</a>
          </h2>
          <section class="projects">
            <h3 class="font-bold text-xl">MongoDb Projects</h3>
            <ul>
              <li>
                Schemas
                <a
                  class="text-orange-800 dark:text-pink-900"
                  href="https://github.com/Erichy-dev/mongodb-practice/tree/master/play01"
                  target="_blank"
                  >Github-link</a
                >
              </li>
              <li>
                Schemas part 2.
                <a
                  class="text-orange-800 dark:text-pink-900"
                  href="https://github.com/Erichy-dev/mongodb-practice/tree/master/play02"
                  target="_blank"
                  >Github-link</a
                >
              </li>
            </ul>
          </section>
        </section>
        <section>
          <h2
            id="Django"
            class="font-bold text-2xl text-blue-600 dark:text-blue-900"
          >
            <a href="#Django">Django</a>
          </h2>
          Django is an exquisite backend framework. Unlike frameworks such as
          Express, Django provides its <span class="italic">ORM</span>.
          Therefore the learning curve is exponential.<br />
          <h3 class="font-bold text-xl">Django Projects:</h3>
          <ul>
            <li>
              Tutorial App
              <a
                class="text-orange-800 dark:text-pink-900"
                href="https://github.com/Erichy-dev/Django-practice"
                target="_blank"
                >Github-link</a
              >
            </li>
          </ul>
        </section>
        <section>
          <h2
            id="GAMES"
            class="font-bold text-2xl text-blue-600 dark:text-blue-900"
          >
            <a href="#GAMES">GAMES</a>
          </h2>
          <p>
            Created few game prototypes using PhaserJs. Phaser is a 2D game
            engine that enables you to create HTML games. Try them out.
          </p>
          <section class="projects">
            <h3 id="game-projects" class="font-bold text-lg">Game Projects</h3>
            <ul>
              <li>
                Squirrel
                <a
                  class="text-orange-800 dark:text-pink-900"
                  href="https://github.com/Erichy-dev/Squirrel"
                  target="_blank"
                  >Github-link</a
                >
              </li>
              <li>
                Tile-hacker
                <a
                  class="text-orange-800 dark:text-pink-900"
                  href="https://github.com/Erichy-dev/TileHacker"
                  target="_blank"
                  >Github-link</a
                >
              </li>
            </ul>
          </section>
          <div class="goals">
            <h3 id="game-goals" class="font-bold text-lg">Game Goals</h3>
            <ul class="">
              <li>Shooting game using PhaserJs</li>
              <li>Solar-system using ThreeJs</li>
            </ul>
          </div>
        </section>
      </section>
      <section>
        <h1 id="Tech-Articles" class="font-extrabold text-3xl text-emerald-800">
          <a href="#Tech-Articles">Tech Articles</a>
        </h1>
        <div>
          <ul>
            <li>
              Vue defineProps() vs provide-inject.
              <a
                class="text-orange-800 dark:text-pink-900"
                href="https://medium.com/@erichnyaga1/vue-props-in-composition-api-and-typescript-d3b35863fe27"
                target="_blank"
                >LINK</a
              >
            </li>
            <li>
              The Big-O Notation in Typescript.
              <a
                class="text-orange-800 dark:text-pink-900"
                href="https://medium.com/@erichnyaga1/the-big-o-notation-in-typescript-7f0a0221969d"
                target="_blank"
                >LINK</a
              >
            </li>
            <li>
              Singly-linked lists
              <a
                class="text-orange-800 dark:text-pink-900"
                href="https://medium.com/@erichnyaga1/singly-linked-lists-in-typescript-346c14bc2392"
                target="_blank"
                >LINK</a
              >
            </li>
          </ul>
        </div>
      </section>
    </body>
  </main>
</template>

<style>
body ul {
  padding-left: 2rem;
}
</style>
