<template>
<div class="text-white text-center capitalize py-3 px-3 w-full h-fit bg-gray-800 mt-1 absolute z-10">
   <div @click="index1 = !index1" class="mb-2 border-b border-gray-700 py-1">{{ $t("about") }} <i  class="fa fa-chevron-down duration-300" :class="{' rotate-0': !index1, 'rotate-180': index1}" /></div>
   <div v-show="index1">
    <ul class="mt-2">
        <li @click="navigateTo('/team')" class="border-b border-gray-700 pb-2">{{ $t("team") }}</li>
        <li @click="navigateTo('/supporters')" class="py-2 border-b border-gray-700 ">{{ $t("supporters") }}</li>
    </ul>
</div>
<div @click="index2 = !index2" class="mb-2 border-b border-gray-700 py-1">{{ $t("contact") }} <i  class="fa fa-chevron-down duration-300" :class="{' rotate-0': !index2, 'rotate-180': index2}" /></div>
   <div v-show="index2">
    <ul class="mt-2">
        <li class="border-b border-gray-700 pb-2">{{ $t("technicalTeam") }}</li>
        <li class="pt-2 border-b border-gray-700 pb-2">{{ $t("customerServices") }}</li>
        <li class="py-1 border-b border-gray-700 pb-2">{{ $t("commercial") }}</li>
    </ul>
</div>
   <div>{{ $t("rate") }}</div>
</div>
</template>

<script setup>

const index1 = ref(false)
const index2 = ref(false)
</script>