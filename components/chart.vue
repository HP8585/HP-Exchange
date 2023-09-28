<template>
  <div>
<Line
height="400"
:data="chartData.graphData"
:options="chartData.chartOptions"
/>
  </div>
</template>



<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement,PointElement, CategoryScale, LinearScale)

const Cdata = ref([])
const chartData = computed(() =>{
  return {
    graphData: {
      labels: Cdata.value.map((_, index) => index + 1),
      datasets: [
        {
          label: 'Fluctuation Data',
          backgroundColor: '#dd6b20',
          data: Cdata.value,
          borderColor: '#dd6b20'
        }
      ]
    },
     chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    }
  }
})
const formattedParam = ref(null)
const route = useRoute()
const formatParam = (arg) =>{
  const id = route.params

if (useRoute().params.id === 'xrp') {
  formattedParam.value = 'ripple'
} else if(useRoute().params.id == 'binance-coin'){
  formattedParam.value = 'binancecoin'
}else{
  // Handle other formats here
  formattedParam.value = useRoute().params.id
}
}

const loadChartData = async () => {
  try {

    formatParam()
    setTimeout(async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${formattedParam.value}/market_chart?vs_currency=usd&days=30&interval=daily`)
    const { prices } = await response.json()
    Cdata.value = prices.map(price => price[1])
    }, 2000);
    
  } catch (e) {
    console.error(e)
  }
}

onMounted(async() => await loadChartData())
</script>