<script setup>

const props = defineProps({
    title: String
})


const selectedTitle = inject('selectedTitle')
</script>

<template>
    <div class="mt-7 text-sm" v-show="selectedTitle === title">
    <slot/>
    </div>
</template>