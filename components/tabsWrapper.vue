<script setup>

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)

</script>

<template>
    <div class="h-screen overflow-hidden">
       
        <img src="../assets/mainn-logo.png" class=" absolute md:left-[50%] md:translate-x-[-50%]  w-[22em] mx-5 my-[3.6em] md:my-5 md:mx-[-2em] md:w-[25em] opacity-20" alt="">
  
<div class="bg-gray-700 w-[23em]  md:w-[50em] my-10 md:h-[25em] mx-auto text-orange-600 py-4 px-4 md:px-10 flex flex-col gap-3">

    <ul class=" flex flex-nowrap whitespace-nowrap text-[0.8rem] md:text-lg gap-2 justify-between relative">
        <li
        v-for="title in tabTitles" :key="title"
        class="font-bold cursor-pointer capitalize border-b-orange-600 pb-[0.2px] rounded-b-sm" :class="{ selected: selectedTitle === title, 'border-b-[0.2em]': selectedTitle === title}"
        @click="selectedTitle = title"
        >
        {{ title }}
        
    </li>
  
    </ul>

    <slot/>
</div>
</div>
</template>