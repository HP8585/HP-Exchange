<template>
<div class="text-black  md:container md:mx-auto md:w-[70em] pb-10">
        <h1 class="text-white mb-4 ml-3 md:ml-0 text-3xl font-semibold">{{ $t("latestNews") }} :</h1>

        <Swiper :modules="[SwiperPagination, SwiperAutoplay]" :autoplay="{
            delay: 3000,
            disableOnInteraction: false
        }" :pagination="true" :loop="true" class="w-[20em] md:w-full z-[222]">
            
            <SwiperSlide v-for="(item, index) in articles" :key="index" @click="navigateTo(item.url)"  class="mb-10 bg-gray400 shadow-xl hover:scale-105 cursor-pointer duration-300 hover:shadow-2xl " >
                <div class="relative" @click="navigateTo(item.url)">
                <img :src="item.image" alt="img" class="w-full max-h-[16em] md:max-h-[32em] object-cover flex items-center justify-center"  v-if="item.image">
                
                    <div v-if="item.image">
                        <!-- <span class="translate-y-[-14em] md:absolute text-white font-bold px-2 py-2 text-[.7rem] md:text-[0.8rem] bg-gray-800 bg-opacity-60 z-10">Published: {{ item.publishedAt }}</span> -->
                    <p class="translate-y-[-6em] md:absolute text-white font-bold px-10 py-5 md:text-xl bg-gray-800 bg-opacity-60 z-10">{{ item.title }}</p>
                </div>
                
            </div>

            </SwiperSlide>
       
        </Swiper>
    
    </div>

</template>

<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue'
const { loadNews, articles } = loadArticles2()


onMounted(()=>{
    setTimeout(() => {
        loadNews()
    }, 2000);
   
})
</script>