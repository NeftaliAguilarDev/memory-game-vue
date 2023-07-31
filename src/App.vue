<script setup lang="ts">
import Card from './components/Card.vue';
import HeaderBoard from './components/HeaderBoard.vue'
import { useAnimalImages } from './composables/animalImages';
import { flipCard, board, startGame, isGameStarted } from './helpers/cardGame'
const { images, isLoading, isError } = useAnimalImages()
startGame()
const saveUsername = (event) => {
  localStorage.setItem('username', event.target.username.value)
  startGame()
}
</script>

<template>
  <div>
    <div class="container mx-auto p-10">
      <HeaderBoard :board="board" />
      <template v-if="isLoading">
        <div class="text-center">
          <img class="h-32 w-32 mx-auto block" src="./assets/images/loader.gif" alt="">
          <span class="text-xl">Loading game</span>
        </div>
      </template>
      <template v-if="!isGameStarted && !isLoading">
        <form @submit.prevent="saveUsername">
          <input name="username" type="text" class="w-100 p-2 border-4" placeholder="Write your name">
          <button>Guardar</button>
        </form>
      </template>
      <div v-if="!isLoading && !isError && isGameStarted"
        class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2 xl:gap-5 mt-10">
        <template v-for="(image) in images" :key="image">
          <Card @click="flipCard($event)" :image="image" class="cards"></Card>
        </template>
      </div>
      <div v-if="isError">
        <h1>An error occurs. Please try later.</h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./helpers/cardGame