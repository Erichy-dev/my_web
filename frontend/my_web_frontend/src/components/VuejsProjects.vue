<script lang="ts" setup></script>

<template>
  <section id="VueJs">
    <div id="vueHead" class="flex flex-row">
      <h2 class="font-bold text-4xl md:text-7xl self-center text-emerald-400">
        <a href="#VueJs">VueJs...</a>
      </h2>
      <img alt="Vue logo" class="logo w-3/12 h-1/4" src="@/assets/logo.svg" />
    </div>
    <div id="VueJsSection">
      This website uses VueJs. An incredibly dynamic framework for SPAs. Vue is
      a hybrid of React and Angular.<br />
      <section class="projects">
        <h3 id="vue-projects" class="font-bold text-xl underline m-3">
          Vue Projects
        </h3>
        <ul class="">
          <li>
            Cloned React Tutorial app.<a
              href="https://stackblitz.com/edit/vitejs-vite-gz1eeu?terminal=dev"
              target="_blank"
            >
              StackBlitz-link. </a
            >Perfect practice on
            <span class="italic text-green-700 dark:text-black dark:font-bold"
              >props, events, setup function, watchers, transition-animation,
              parent-child relationships.</span
            >
            The app displays Vue's strengths over React. The react tutorial app
            has quite a number of bugs.Try comparing
            <a
              class="text-orange-800 dark:text-pink-900"
              href="https://stackblitz.com/edit/vitejs-vite-gz1eeu?terminal=dev"
              target="_blank"
              >my-vue-app</a
            >
            with
            <a
              class="text-orange-800 dark:text-pink-900"
              href="https://codepen.io/gaearon/pen/gWWZgR?editors=0010"
              target="_blank"
              >react's-app. </a
            ><a
              class="text-orange-800 dark:text-pink-900"
              href="https://github.com/Erichy-dev/Vue-Practices/tree/main/projects/Clone-React"
              target="_blank"
              >link-to-github</a
            >
          </li>
          <li>
            Multi-view vue app using vue-router and vitest.
            <a
              class="text-orange-800 dark:text-pink-900"
              href="https://github.com/Erichy-dev/ngarisha...frontend"
              target="_blank"
              >Github-link.
            </a>
            <a
              class="text-red-900 dark:text-pink-900"
              href="https://ngarisha.herokuapp.com"
              target="_blank"
              >Heroku</a
            >
          </li>
          <li>
            Practice on props.
            <a
              class="text-orange-800 dark:text-pink-900"
              href="https://github.com/Erichy-dev/Vue-Practices/tree/main/Guide/components-in-depth-practice1"
              target="_blank"
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
      <section id="vueGoals">
        <h4 class="font-bold text-xl underline m-3">Vue Goals</h4>
        <ul>
          <li>
            Merge the filesystem api I created to display size of folders in a
            directory. The api should use promises.
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
