<template>
  <header class= "flex items-center justify-between px-8 bg-gray-800 py-4 text-orange-600 relative">
    <div @click="isSidebarExpanded = !isSidebarExpanded" class="hover:bg-gray-700 px-2 rounded-full py-0.5 duration-300 cursor-pointer"><i class="fa fa-bars text-2xl" /></div>

    <div class=" w-fit"><img src="../assets/mainn-logo.png" class="w-[6em] top-0 translate-y-[-0.6em] translate-x-[-2em] md:translate-x-0 absolute h-fit" alt=""></div>

    <div><switch-lang/></div>

  
  </header>
  <sidebar v-show="isSidebarExpanded"/>
  <slot/>

  <footer class="sticky z-20 bottom-0 py-4 px-20 bg-gray-800 text-orange-600 w-full">
      <div class="flex justify-between">
        <NuxtLink to="/swap" class="relative">
        <div @click="navigateTo('/swap')" class="flex flex-col cursor-pointer hover:bg-gray-700 px-3 py-1 duration-200 rounded-full ">
          <i class="fa fa-right-left text-2xl" />
          
        </div>
        <div class="absolute bottom-0 left-0 w-full h-1 rounded bg-orange-600" v-if="$route.path === '/swap'"></div>
      </NuxtLink>

      <NuxtLink to="/" class="relative">
        <div @click="navigateTo('/')" class="hover:bg-gray-700 px-3 py-1 duration-200 rounded-full"><i class="fa fa-home text-2xl cursor-pointer " /></div>
        <div class="absolute bottom-0 left-0 w-full h-1 rounded bg-orange-600" v-if="$route.path === '/'" :class="{'active': $route.path === '/'}"></div>
      </NuxtLink>

      <NuxtLink to="profile" class="relative">
        <div @click="navigateTo('/profile')" class="hover:bg-gray-700 px-3 py-1 duration-200 rounded-full"><i class="fa fa-user text-2xl cursor-pointer " /></div>
        <div class="absolute bottom-0 left-0 w-full h-1 rounded bg-orange-600" v-if="$route.path === '/profile'"></div>
      </NuxtLink>
      </div>
    </footer>

</template>

<script setup>

const isSidebarExpanded = ref(false)


</script>
