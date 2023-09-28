<template>
<div class="container mx-auto w-[23em] md:w-[40em] mb-[2em]">
    <!-- <h1 class="text-white text-2xl">History:</h1> -->
    <div class="text-orange-600 my-6">
        <ul class="mb-[6.2em] ">
            <li v-for="(order, index) in orders" :key="index" class="bg-gray-800 px-4 py-4 rounded-lg font-semibold mb-[1.2em] ">
                <div class="border-b pb-5 border-gray-700">
                <div class="flex justify-between">
                    <span class="capitalize">{{ order.currency1 }}</span>
                    <span>{{ $t("amount") }} : {{ order.amount1 }}</span>
                </div>
                <span>At: <span :class="{'text-red-600': order.at < 0, 'text-green-600': order.at > 0}">{{ order.at }}%</span></span>
            </div>
            <br>
            <div>
                <div class="flex justify-between">
                    <span class="uppercase">{{ order.currency2 }}</span>
                    <span>{{ $t("amount") }} : {{ order.amount2 }}</span>
                    
                </div>
                <div>
                    <span>{{ $t("created") }} : <span class="text-gray-700 text-sm ml-1">{{ order.createdAt }}</span></span>
                </div>
            </div>
            </li>
        </ul>
    </div>
</div>
</template>


<script>

export default {
   props:['orders']
}

</script>
