<template>
  <div id="sideBar" class="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">
    <div class="flex flex-col">
      <div class="text-right hidden md:block mb-4">
        <button id="sideBarHideBtn">
          <i class="fad fa-times-circle" />
        </button>
      </div>
      <p class="uppercase text-xs text-gray-600 mb-4 tracking-wider">
        homes
      </p>
      <nuxt-link class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500" :to="{name: 'Cats'}">
        <i class="fad fa-chart-pie text-xs mr-2" />
        Cats
      </nuxt-link>
      <a href="./index-1.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i class="fad fa-shopping-cart text-xs mr-2" />
        ecommerce dashboard
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>
