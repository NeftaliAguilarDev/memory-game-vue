<script setup>
import CardImage from './components/CardImage.vue'
import HeaderBoard from './components/HeaderBoard.vue'
import { useAnimalImages } from './composables/animalImages'
import { flipCard, board, startGame, isGameStarted, userName, gameOver, playAgain } from './utils/cardGame'
const { images, isLoading, isError } = useAnimalImages()
startGame()
const saveUsername = (event) => {
  localStorage.setItem('username', event.target.username.value)
  startGame()
}
</script>

<template>
  <div>
    <div class="container mx-auto px-5">
      <template v-if="isLoading">
        <div class="text-center min-h-screen flex flex-col items-center justify-center w-full md:w-6/12 mx-auto">
          <img class="h-32 w-32 mx-auto block" src="./assets/images/loader.gif" alt="">
          <span class="text-xl">Loading game</span>
        </div>
      </template>
      <template v-if="!isLoading && !isGameStarted">
        <form @submit.prevent="saveUsername"
          class="text-center min-h-screen flex flex-col items-center justify-center w-full md:w-6/12 mx-auto">
          <h2 class="text-2xl lg:text-5xl font-bold text-green-modyo">Welcome to Memory Game</h2>
          <input required minlength="3" name="username" type="text"
            class="w-full p-2 border mt-7 mb-2 text-center focus-within:border-gray-200 rounded-md"
            placeholder="Write your name">
          <button class="border rounded-md px-5 py-2 w-full bg-green-modyo text-white">Save</button>
        </form>
      </template>
      <template v-if="!isLoading && isGameStarted && !isError" class="">
        <HeaderBoard :board="board" />
        <div v-show="!gameOver"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 xl:gap-5 mt-10 pb-10 relative top-44 sm:top-0">
          <template v-for="(image) in images" :key="image">
            <CardImage @click="flipCard($event)" :image="image" class="cards"></CardImage>
          </template>
        </div>
        <div v-if="gameOver" class="w-full p-10 text-center relative top-44 sm:top-0">
          <h2 class="text-2xl lg:text-5xl font-bold text-green-modyo mb-5">Game Over</h2>
          <h3 class="text-xl lg:text-3xl font-bold text-black">Congratulations {{ userName }}</h3>
        </div>

      </template>
      <div v-if="isError" class="w-full p-10 text-center relative top-44 sm:top-0">
        <img class="w-20 mx-auto" src="https://freepngimg.com/thumb/sad_emoji/36860-2-sad-emoji-transparent-image.png"
          alt="">
        <span class="text-2xl lg:text-5xl font-bold text-green-modyo mb-5">An error occurs. Please try later.</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>./utils/flipCard