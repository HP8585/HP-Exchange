<template>
   
    <div v-if="!isLoading">
        <div>
        <market-marquee class="" />
    </div>
    <div class="container mx-auto w-fit relative mb-20">
        <img src="../assets/wallpaper.jpg" class="  w-[100em] h-[30em]">
        <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 class="font-bold  text-orange-600 text-center text-4xl" style="text-shadow: 0px 0px 5px; letter-spacing: 2px;">{{ $t("slogan1") }}</h1>
            <h2 class="font-semibold mt-5 text-orange-600 text-center text-xl">{{ $t("slogan2") }}</h2>
            <p class="font-semibold px-3 py-5 rounded-lg bg-gray-700 bg-opacity-60 mt-5 text-orange-600 text-center  h-[20em] md:h-fit w-[32em] md:w-fit md:text-sm text-[0.7rem]">
                {{ $t("description") }} <span><strong>HP Crypto</strong></span>.</p>
        </div>
        
    </div>


    <div class="container mx-auto w-fit px-10 md:px-0">
        <h1 class="font-bold  text-orange-600 text-3xl md:text-4xl">{{ $t("slogan3") }}</h1>
        <div class="flex justify-between mt-10 text-center text-orange-600">
            <div class="flex flex-col">
                <span class="font-extrabold text-3xl">2M+</span>
                <span class="font-bold">{{ $t("clients") }}</span>
            </div>
            <div class="flex flex-col ml-10 md:ml-20">
                <span class="font-extrabold text-3xl">190+</span>
                <span class="font-bold">{{ $t("countriesSupported") }}</span>
            </div>
            <div class="flex flex-col">
                <span class="font-extrabold text-3xl">$330B+</span>
                <span class="font-bold">{{ $t("yearlyTrading") }}</span>
            </div>
        </div>
    </div>



<!--Container of top rank coins-->
<div  class="px-4 md:px-0 container mx-auto w-fit grid grid-cols-3 gap-4 py-10 capitalize">
    <div @click="navigateTo(item.id)" class="flex flex-col gap-5 md:w-[16em] rounded font-semibold bg-gray-800 text-orange-600 cursor-pointer px-4 py-4" v-for="(item, index) in cryptos" :key="index">
        
        <div class="flex flex-col md:flex-row justify-between ">
            <div >
                <h2 class="font-extrabold">{{ item.name }}</h2>
                <p class="text-sm">{{ item.symbol }}</p>
            </div>
        
        <span>{{ $t("rank") }}: {{ item.rank }}</span>
    </div>

    <div class="flex flex-col gap-4">
        
        <p>{{ $t("fluctuation") }}: <span class="font-semibold" :class="{'text-green-600': item.changePercent24Hr > 0, 'text-red-600': item.changePercent24Hr < 0}">{{ item.changePercent24Hr }}%</span></p>
        <span>{{ $t("price") }}: ${{ item.priceUsd }}</span>
    </div>

    </div>
</div>

<!--News carousel-->
<news/>
</div>
<div v-else-if="isLoading" class="text-white flex gap-5 items-center justify-center h-screen ">
    <span class="text-semibold animate-pulse text-3xl">{{ $t("loading") }}</span>
    <div class="w-20 animate-pulse">
    <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
  <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1"></animateTransform>
  </circle>
  <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2"></animateTransform>
  </circle>
  <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
  </circle>
</svg>
</div>

</div>
</template>


<script setup>

const isPageLoading = ref(true)
setTimeout(() => {
    isPageLoading.value = false
}, 4000);

const { isLoading, cryptos, loadData } = fetchMainData()


onMounted(()=>{

    setTimeout(() => {
        loadData()
        
    }, 3000);

    setInterval(()=>{
        loadData()
    }, 5000)

})
</script>