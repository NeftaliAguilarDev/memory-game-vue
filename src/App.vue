<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Card from './components/Card.vue';
let images = reactive([]);
const isLoading = ref(true);
const getImages = async () => {
  try {
    const response = await fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20')
    const { entries } = await response.json()
    // images = fields;
    entries.forEach(element => {
      if (images.length <= 9) {
        images.push(element.fields.image.url)
      }
    })
    isLoading.value = false;

  } catch (error) {
    alert(error)
    isLoading.value = true;
  }
}
onMounted(() => {
  getImages()
})
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
      <div v-else class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2 xl:gap-5">
        <template v-for="image in images" :key="image">
          <Card :image="image"></Card>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
