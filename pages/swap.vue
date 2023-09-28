<template>

<notif1 :class="{'translate-x-0': isSuccessful, 'translate-x-[-130%]': !isSuccessful}"/>
<div class="container  mx-auto w-fit my-10">

    <!--swap window-->
    <div class="bg-gray-800 rounded-md text-orange-600 text-center py-5 px-5">
        <h1 class="mb-5"><strong>HP Crypto</strong></h1>

        <div class="flex flex-col gap-5">
        <div class="flex gap-10">
           <select ref="firstS" v-model="origin" name="first-currency" id="first-currency" @change="comparison" class="md:w-[10em] bg-gray-700 py-1.5 px-2 rounded-lg">
    <option v-for="coin in coinNames"  :value="coin?.name" :key="coin.id" :data-image="coin.logo">
        <img :src="coin.logo" alt="">
        <p>{{ coin.id }} </p>
    </option>
    </select>

            <input ref="amount1" @input="comparison" v-model="many" type="number" class="w-[7em] md:w-[10em] ouline-none px-3 bg-gray-700 rounded-lg outline-none border-none text-orange-600">
        </div>

        <!--swap button-->
        
      <!-- <div @click="switchValues" class="bg-orange-600 rounded-full w-[2.6em] h-8 ml-[50%] translate-x-[-50%] py-1 cursor-pointer hover:bg-orange-700 duration-200">
        <i class="fa-solid fa-arrow-right-arrow-left text-white"/>
      </div> -->
    

        <div class="flex gap-10">
            <select ref="secondS" v-model="demanded" name="second-currency" id="second-currency" @change="comparison" class="md:w-[10em] bg-gray-700 py-1.5 px-2 rounded-lg">
    <option v-for="coin in coinNames"  :value="coin.id" :key="coin.id" :data-image="coin.logo" :selected="coin.id === demanded">
        <img :src="coin.logo" alt="">
        <p>{{ coin.id }} </p>
    </option>
    </select>

            <input ref="amount2" disabled v-model="calculated" type="number" class="w-[7em] md:w-[10em] px-3 bg-gray-700 rounded-lg outline-none border-none text-orange-600">
        </div>

        <button @click="orderRegister(firstS.value,secondS.value,amount1.value,amount2.value, changee)" class="bg-orange-600 text-white rounded-xl py-1 hover:bg-orange-700 duration-200">{{ $t("order") }}</button>
    </div>
    </div>
</div>
<h1 class="text-white font-semibold text-2xl text-center ml-[-10em] md:mr-[35%]">{{ $t("history") }} :</h1>
<keep-alive>
<swap-history v-show="!isThere" :orders="orders"/>
</keep-alive>
<div v-show="isThere" class="text-white bg-gray-600 py-20 px-20 md:px-[12em] bg-opacity-40 mt-5 rounded-lg text-xl mb-10 container mx-auto w-fit">
  {{ $t("nothing") }}
</div>
</template>




<script setup>
import coinNames from '../assets/coinNames.json'
const { comparison, origin, demanded, many, calculated, switchValues, orderRegister, orders, changee, isThere, isSuccessful, retrieveStorage } = comparisonn()

onMounted(()=>{
  retrieveStorage()
})
const firstS = ref()
const secondS = ref()
const amount1 = ref()
const amount2 = ref()
// const ordered = ()=>{
//   const p = document.getElementById('first-currency')
// }
</script>