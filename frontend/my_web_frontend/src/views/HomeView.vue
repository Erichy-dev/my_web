<script setup lang="ts">
import { ref } from "vue";
import Guide from "../components/Guide.vue";

const showDummy = ref(false);
</script>

<template>
  <main class="lg:items-start flex flex-row w-full pt-4">
    <Guide />

    <body class="flex-1 px-10 ml-40 lg:ml-72 font-normal mt-16">
      <welcome id="welcome" class="text-teal-700 italic"
        >My name is Eric Nyaga. I'm a software engineer, passionate and
        industrious currently studying at Mount Kenya University</welcome
      >
      <section>
        <h1 id="PROJECTS" class="font-extrabold text-3xl py-5 text-emerald-800">
          <a href="#PROJECTS">PROJECTS & PROTOS</a>
        </h1>
        <button class="bg-green-400 rounded-md" @click="showDummy = !showDummy">
          04-07-22
        </button>
        <span class="text-sky-700" v-if="showDummy">
          It's been nearly a semester using a 2GB RAM. I've had an breeze
          experience building projects quickly since often I'd wait for the PC
          to wake from the realms of dormancy. Sadly after covering other
          expenses, I've saved just enough to enter the horrors of a 4GB
          RAM.</span
        >
        <div>
          <h2 id="GAMES" class="font-bold text-2xl text-blue-600">
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
                Squirrel<a class="text-orange-800" href="https://github.com/Erichy-dev/Squirrel" target="_blank"
                  >Github-link</a
                >
              </li>
              <li>
                Tile-hacker<a class="text-orange-800" href="https://github.com/Erichy-dev/TileHacker" target="_blank"
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
        </div>
        <section id="VueJs">
          <h2 class="font-bold text-2xl text-blue-600">
            <a href="#VueJs">VueJs</a>
          </h2>
          <div>
            This website is set up using VueJs. An incredibly dynamic framework
            for SPAs. My bigest pro feature with Vue compared with React is the
            ability to organize code such that logic can be separate from
            another logic while still maintaining HTML and js/ts features.
            features. However, compared to Angular Vue still has a mile to go in
            support for typescript.<br />
            <section class="projects">
              <h3 id="vue-projects" class="font-bold text-xl">Vue Projects</h3>
              <ul class="">
                <li>
                  Cloned React Tutorial app. Perfect practice on
                  <span class="italic text-green-700"
                    >props, events, setup function, watchers,
                    transition-animation, parent-child relationships. </span
                  ><a class="text-orange-800" href="https://github.com/Erichy-dev/Vue-Practices/tree/main/projects/Clone-React" target="_blank"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on props.
                  <a class="text-orange-800" href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice1"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on event-handlers.
                  <a class="text-orange-800" href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice2" target="_blank"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on transition-animation.
                  <a class="text-orange-800" href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice4" target="_blank"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on attribute-builtins.
                  <a class="text-orange-800" href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice3" target="_blank"
                    >Github-link</a
                  >
                </li>
                <li>
                  Practice on provide-inject.
                  <a class="text-orange-800" href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice5" target="_blank"
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
          <h2 class="font-bold text-xl text-blue-600">
            <a href="#Filesystem-API">Filesystem API</a>
          </h2>
          <p>
            A simple project to play with the filesystem api provided by
            <span class="text-blue-700">nodejs</span>. The program determines
            the size of a directory. The project was inspired by lack of an
            ability to sort folders based on their size. At least not on my
            phone or PC. Directories unlike files do not have a size attribute.
            <a
              class="text-orange-800"
              href="https://github.com/Erichy-dev/fileapi"
              target="_blank"
              >Github-link</a
            >
          </p>
        </section>
        <section>
          <h2 id="ExpressJs" class="font-bold text-2xl text-blue-600">
            <a href="#ExpressJs">ExpressJs</a>
          </h2>
          <section class="projects">
            <h3 id="express-projects" class="font-bold text-xl">
              Express Projects
            </h3>
            <ul>
              <li>
                Routes & Middleware
                <a class="text-orange-800" href="https://github.com/Erichy-dev/ExpressJs-practices/tree/master/play01" target="_blank"
                  >Github-link</a
                >
              </li>
              <li>
                Routes & Middleware
                <a class="text-orange-800" href="https://github.com/Erichy-dev/ExpressJs-practices/tree/master/play02" target="_blank"
                  >Github-link</a
                >
              </li>
            </ul>
          </section>
        </section>
        <section>
          <h2 id="MongoDb" class="font-bold text-2xl text-blue-600">
            <a href="#MongoDb">MongoDb</a>
          </h2>
          <section class="projects">
            <h3 class="font-bold text-xl">MongoDb Projects</h3>
            <ul>
              <li>
                Schemas
                <a class="text-orange-800" href="https://github.com/Erichy-dev/mongodb-practice/tree/master/play01" target="_blank"
                  >Github-link</a
                >
              </li>
              <li>
                Schemas part 2.
                <a class="text-orange-800" href="https://github.com/Erichy-dev/mongodb-practice/tree/master/play02" target="_blank"
                  >Github-link</a
                >
              </li>
            </ul>
          </section>
        </section>
        <section>
          <h2 id="Django" class="font-bold text-2xl text-blue-600">
            <a href="#Django">Django</a>
          </h2>
          Django is an exquisite backend framework. Unlike frameworks such as
          Express, Django provides its own <span class="italic">ORM</span>.
          Therefore the learning curve is exponential.<br />
          <h3 class="font-bold text-xl">Django Projects:</h3>
          <ul>
            <li>
              Tutorial App
              <a class="text-orange-800" href="https://github.com/Erichy-dev/Django-practice" target="_blank">Github-link</a>
            </li>
          </ul>
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
              <a href="https://medium.com/@erichnyaga1/vue-props-in-composition-api-and-typescript-d3b35863fe27" target="_blank">LINK</a>
            </li>
            <li>
              The Big-O Notation in Typescript.
              <a href="https://medium.com/@erichnyaga1/the-big-o-notation-in-typescript-7f0a0221969d" target="_blank">LINK</a>
            </li>
            <li>Singly-linked lists<a href="https://medium.com/@erichnyaga1/singly-linked-lists-in-typescript-346c14bc2392" target="_blank">LINK</a></li>
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
