<script setup lang="ts">
const props = defineProps({
    image: String
})
const url = props.image
const imageName = props.image?.split('/').pop()
</script>
<template>
    <div class="border-2 border-green-modyo h-40 sm:h-48 lg:h-52 w-ful flex items-center justify-center relative overflow-hidden">
        <img :name="imageName" class="absolute z-20 opacity-1 bg-white p-5 lg:p-10 top-0 left-0 h-full w-full object-cover transition-all duration-1000 delay-100"
            src="../assets/images/question-mark-icon.jpg" alt="">
        <img class="absolute z-10 opacity-1 bg-white top-0 left-0 h-full w-full object-cover" :src="url" alt="">
    </div>
</template>



<style scoped>
.open > img:first-child {
    @apply z-[-1] top-[100%]
}
</style>