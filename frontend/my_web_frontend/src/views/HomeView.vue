<script setup lang="ts">
</script>

<template>
  <section class="lg:items-start flex flex-wrap flex-row w-full pt-20">
    <guide class="flex-0.5 border-r-2 px-4 font-semibold h-full">
      <ul>
        <li><a href="#Projects">Projects</a></li>
        <ul class="pl-3">
          <li><a href="#GAMES">GAMES</a></li>
          <li><a href="#VueJs">VueJs</a></li>
        </ul>
      </ul>
    </guide>
    <body class="flex-1 px-10">
      <welcome id="welcome"
        >My name is Eric Nyaga. I'm a software engineer, passionate and
        industrious currently studying at Mount Kenya University</welcome
      >
      <projects id="projects" class="">
        <h1 id="PROJECTS" class="font-bold text-3xl py-5">PROJECTS</h1>
        <div id="GAMES">
          <h2 class="font-semibold">GAMES</h2>
          <p>
            Created few game prototypes using PhaserJs. Phaser is a 2D game
            engine that enables you to create HTML games. Try them out.
          </p>
        </div>
        <div id="VueJs">
          <h2 class="font-semibold">VueJs</h2>
          <p>
            This website is set up using VueJs. An incredibly dynamic framework
            for SPAs. Check out some of my writings on VueJs
          </p>
        </div>
      </projects>
    </body>
  </section>

</template>
