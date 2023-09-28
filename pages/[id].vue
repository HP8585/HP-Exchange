<template>
  <div class="h-[111vh] mt-10">  
    <div class="text-orange-600 mb-20 font-bold bg-gray-800 container mx-auto md:w-[80%] my-3 px-7 py-5 capitalize">
        <chart/>
        <div class="flex flex-col justify-start mt-10">
            <div class="flex items-center justify-between">
        <h1 class="text-4xl font-bold ">{{ formattedName}}</h1>
        <span class="text-xl mt-3" :class="formattedChange > 0 ? 'text-green-600':'text-red-600'">{{ formattedChange }}%</span>
</div>
<br>
<p class="text-xl">${{ formattedPrice }}</p>
</div>
        <br>
        <div class="flex flex-col gap-4">
            <div class="flex justify-between">
            <p>{{ $t("symbol") }}: {{ data.data.symbol }}</p>
            <p>{{ $t("rank") }}: {{ data.data.rank }}</p>
        </div>
            <p>{{ $t("supply") }}: <span>{{ formattedSupply }}</span></p>
            <p>{{ $t("marketC") }}: ${{ formattedMarketCapUsd }}</p>
            <p>{{ $t("volume") }}: ${{ formattedVolume }}</p>
            <p class=" overflow-hidden text-ellipsis w-[18em]"><span class="text-blue-500">{{ $t("explorer") }}</span> : <a :href="data.data.explorer" class="lowercase text-blue-500 italic overflow-hidden text-ellipsis w-2" style="text-overflow: ellipsis; overflow: hidden; width: 20px;">{{ data.data.explorer }}</a></p>
        </div>
    </div>
  </div>
</template>


<script setup>


const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const route = useRoute()

  const { data } = await useFetch(`https://api.coincap.io/v2/assets/${route.params.id}`)


const formattedName = route.params.id.replace(/-/g, ' ')
const formattedPrice = formatNumberWithCommas(Number(data.value?.data.priceUsd).toFixed(2))
const formattedSupply = formatNumberWithCommas(Number(data.value?.data.supply).toFixed(0))
const formattedMarketCapUsd = formatNumberWithCommas(parseInt(data.value?.data.marketCapUsd))
const formattedVolume = formatNumberWithCommas(parseInt(data.value?.data.volumeUsd24Hr))
const formattedChange = Number(data.value?.data.changePercent24Hr).toFixed(2)







</script>