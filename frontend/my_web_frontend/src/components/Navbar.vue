<script setup lang="ts">
function toggleMenu(e: any) {
  const droppedMenu = document.getElementById("nav-content");
  const menuClass = droppedMenu?.classList;
  const navClass = document.getElementById("navbar")?.classList
  if (menuClass?.contains("hidden")) {
    menuClass.remove("hidden");
    navClass?.remove("max-h-20")
  } else {
    menuClass?.add("hidden");
    navClass?.add("max-h-20")
  }
}


function dropProjects(){
  const Projects = document.getElementById("project-dropdown")
  const projectsClass = Projects?.classList
  if (projectsClass?.contains("hidden")) {
    projectsClass.remove("hidden")
  } else {
    projectsClass?.add("hidden")
  }
}

</script>

<template>
  <!-- z-30 -->
  <nav
    id="navbar"
    class="bg-gray-200 fixed w-full top-0 shadow bg-cover bg-fixed py-1 max-h-20"
  >
    <div
      class="w-full flex flex-col items-center justify-between mt-0 px-2 py-2 lg:py-6"
    >
      <div class="pl-4">
        <a
          class="text-gray-900 no-underline hover:no-underline font-bold text-4xl"
          href="#"
        >
          DEVRIKI
        </a>
      </div>

      <!-- <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
          @click="toggleMenu"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
          <title class="fill-current h-3 w-3">MENU</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 text-orange-900 p-4 lg:p-0 z-20 font-bold"
        id="nav-content"
      >
        <ul
          id="dropdown"
          class="list-reset lg:flex justify-end flex-1 items-center"
        >
          <li class="mr-3">
            <span
              class="inline-block hover:text-green-900 py-2 px-4"
              @click="dropProjects"
              >PROJECTS</span
            >
            <div
              id="project-dropdown"
              class="bg-gray-100 hidden bg-fixed shadow text-red-800 fixed pt-3 px-2"
            >
              <ul>
                <li>VueJs</li>
                <li>Express&NodeJs</li>
                <li>ThreeJs</li>
                <li>SQL</li>
              </ul>
            </div>
          </li>
          <li class="mr-3">
            <a class="inline-block hover:text-green-900 py-2 px-4" href="#"
              >WRITING</a
            >
          </li>
          <li class="mr-3">
            <a class="inline-block hover:text-green-900 py-2 px-4" href="#"
              >REWIND&FORESHADOW</a
            >
          </li>
          <li class="inline-block hover:text-green-900 py-2 px-4">ABOUT</li>
        </ul>
      </div> -->
    </div>
  </nav>
</template>
