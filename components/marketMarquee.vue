<template>
<marquee   class="text-orange-600 font-bold">
    <div >
        <span v-for="(item, index) in coins" :key="index">{{ item.name }} <span class="px-1 rounded" :class="item.changePercent24Hr > 0 ? 'bg-green-600 text-white': 'bg-red-600 text-white'">{{ item.changePercent24Hr }}%</span> - </span>
        
    </div>
</marquee>

</template>

<script setup>
import axios from 'axios'
const coins = ref([])
const formattedChange = ref()

    const fetchDataa = async () => {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets?limit=60')
    coins.value = response.data.data.map((asset)=>({
        ...asset,
        changePercent24Hr: Number(asset.changePercent24Hr).toFixed(2)
    }))
    // formattedChange.value = Number(response.data.changePercent24Hr).toFixed(2)
    console.log(response.data)
    console.log(coins.value);
  } catch (error) {
    console.error(error)
  }
}

onMounted(()=>{
    fetchDataa()
})
</script>