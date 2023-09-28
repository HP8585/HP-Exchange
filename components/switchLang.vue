<template>
    <div class="w-[5em] md:w-fit">
<select v-model="language" class="bg-gray-800 border-none outline-none">
    <option v-for="item in locales" :key="(typeof items === Object ? item.code : item)" :value="item.code">
        {{ item.name }}
    </option>
</select>
</div>
</template>

<script setup>

const { locales, locale, setLocale } = useI18n()

const language = computed({
    get: ()=> locale.value,
    set: (val)=>{
        setLocale(val)
    }
})
</script>