<template>
    <div class="border h-52 w-ful flex items-center justify-center">
        <img src="" alt="">
        <img class="h-full w-full object-cover" :src="image" alt="">
    </div>
</template>

<script setup lang="ts">
defineProps({
    image: String
})
</script>

<style scoped></style>