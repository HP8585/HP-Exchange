<template>
    <dropdown/>
    <notif2  :class="{'translate-x-0': isSuccessful, 'translate-x-[-130%]': !isSuccessful}"/>
<div class="text-orange-600 bg-gray-800 px-5 py-5 mb-10 mx-auto container w-fit">
    <img src="../assets/technical-team.png" class="w-[15em] my-5  mx-auto" alt="">
    <h1 class="font-extrabold text-xl mb-6">{{ $t('contactTeam') }}</h1>
    <form @submit.prevent="sendReport" class="flex flex-col ">
        <label for="title" >{{ $t('title') }} :</label>
        <input class="bg-gray-700 rounded outline-none border-none px-4 mt-2" type="text" id="title">
        <br>
        <label for="description">{{ $t('description2') }} :</label>
        <textarea class="bg-gray-700 py-4 rounded outline-none border-none px-4 mt-2" id="description" cols="30" rows="10" style="resize: none;"></textarea>
        <br>
        <input type="submit" class="bg-orange-600 text-gray-800 w-fit mx-auto px-3 py-1 rounded font-bold cursor-pointer hover:bg-orange-500" :value="$t('submit')">
    </form>
</div>
</template>



<script setup>

const title = ref()

const description = ref()

const isSuccessful = ref(false)

const sendReport = ()=>{
    title.value = null
    description.value = null
    isSuccessful.value = true

    setTimeout(() => {
        isSuccessful.value = false
    }, 2500);
}

</script> 