<template>
    <div class="h-screen md:px-4 ">
<div class="container mx-auto w-[23em]  md:w-full text-white bg-gray-800 h-fit md:h-[37em] py-5 px-6  my-4">
    <div class="flex items-center justify-between text-gray-500 md:text-2xl text-xl mb-6 ">
        <i @click="isExpanded = true" class="fa fa-edit cursor-pointer hover:bg-gray-400 duration-200 px-1 py-1 rounded-full"/>
    <i class="fa fa-share-nodes cursor-pointer hover:bg-gray-400 duration-200 px-1 py-1 rounded-full"/>
</div>
<h1 class="text-white text-2xl md:text-4xl text-center mb-5">{{ $t("profile") }}</h1>
    <div class="mt-2 flex flex-col md:flex-row gap-10 md:gap-[7em]">
        <div class="mx-auto md:mx-0">
            <img :src="userStore.avatar" class="w-[13em] h-[13em] md:h-[22em] object-cover md:w-[22em] rounded-full" alt="">
            
        </div>
        <div class="flex flex-col gap-3 md:gap-6">
            <span class="font-extrabold tracking-widest text-xl md:text-4xl ">{{ userStore.username }}</span>
            <span class="w-[20em] md:h-auto whitespace-normal md:w-[30em] text-sm md:text-lg ">{{ userStore.biography }}</span>
            <span class="text-[0.86rem] md:text-lg md:mt-[10em] text-gray-400">{{ $t("joined") }} : 2 {{ $t("yearsAgo") }}</span>
        </div>
        
    </div>
</div>
<edit-profile @close="isExpanded = false" v-show="isExpanded"  />
</div>
</template>


<script setup>

import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

const isExpanded = ref(false)



onMounted(async ()=>{
    const storedData = JSON.parse(localStorage.getItem('userData'))

    if(storedData){
        userStore.username = storedData.username
        userStore.biography = storedData.biography,
        userStore.avatar = storedData.avatar
     } else if(!userStore.biography && storedData){
        userStore.biography =  `Hi there, I am ${storedData.username} and I am using HP Crypto`
     } else if(!userStore.biography && !storedData){
        userStore.biography =  `Hi there, I am ${userStore.username} and I am using HP Crypto`
     }
   

})

</script>