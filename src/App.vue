<script setup lang="ts">
import Card from './components/Card.vue';
import { useAnimalImages } from './composables/animalImages';
const { images, isLoading, isError } = useAnimalImages()
</script>

<template>
  <div>
    <div class="container mx-auto p-10">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-center">Memory Game</h1>
        <div>
          <ol>
            <li>Errors: <span>0</span></li>
            <li>Points: <span>0</span></li>
          </ol>
        </div>
      </div>
      <template v-if="isLoading">
        <img src="https://i.gifer.com/ZKZg.gif" alt="">
      </template>
      <div v-if="!isLoading && !isError" class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2 xl:gap-5">
        <template v-for="image in images" :key="image">
          <Card :image="image"></Card>
        </template>
      </div>
      <div v-if="isError">
          <h1>An error occurs. Please try later.</h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
