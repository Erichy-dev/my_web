<template>
  <main>
    <div class="flex flex-row">
      <div class="flex-1">
        <button
          id="showDummy1"
          class="bg-green-200 dark:bg-sky-900 rounded-md"
          @click="showDummy = !showDummy"
        >
          04-07-22
        </button>
        <span
          id="showDummy1Text"
          class="text-sky-700 dark:text-cyan-200"
          v-if="showDummy"
        >
          It's been nearly a semester using a 2GB RAM. I've had a breeze
          experience building projects. Often I'd wait minutes and hours for the
          PC to wake from the realms of dormancy. Sadly after covering other
          expenses, I've saved enough to enter the horrors of a 4GB RAM.</span
        >
      </div>
      <div class="flex-1">
        <button
          class="bg-green-200 dark:bg-sky-900 rounded-md"
          id="showDummy2"
          @click="showDummy2 = !showDummy2"
        >
          12-07-22
        </button>
        <span
          id="showDummy2Text"
          class="text-sky-700 dark:text-cyan-200"
          v-if="showDummy2"
        >
          In 8 days I've achieved twice what took me more than 2 months. The 2GB
          RAM must have been doing me some hidden favors. I'm Great.</span
        >
      </div>
    </div>
  </main>
</template>
