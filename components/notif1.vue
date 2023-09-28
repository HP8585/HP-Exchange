<template>
  <div class="relative  flex items-center gap-3 justify-between bg-gray-800 w-fit h-fit px-4 py-2 capitalize overflow-hidden rounded-md mt-4 absolut left-6 z-10 duration-500" >
    <img class="w-5" src="../assets/check.png">
    <div class="text-white text-lg">{{ $t("registered") }}</div>

</div>


</template>

<script setup>
const widthh = ref(100)

const { isSuccessful, width } = comparisonn()
// setInterval(() => {
//         width--;
//       }, 50)
onMounted(()=>{
  widthh.value= 100
})
setInterval(() => {
 widthh.value --;
  }, 50);
</script>
  