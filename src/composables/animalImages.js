import { reactive, ref } from 'vue'
export function useAnimalImages () {
  const urlAPI =
    'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20'
  const NUMBER_OF_PAIRS = 9
  const images = reactive([])
  const isLoading = ref(true)
  const isError = ref(false)
  const getImages = async () => {
    try {
      const response = await fetch(urlAPI)
      const { entries } = await response.json()
      entries.forEach((item) => {
        if (images.length < NUMBER_OF_PAIRS) {
          images.push(item.fields?.image?.url)
        }
      })
      // Duplicate de images inserted
      images.push(...images)
      // Shuffle imaege order
      images.sort(() => Math.random() - 0.5)
    } catch (error) {
      isError.value = true
    }
    isLoading.value = false
  }
  getImages()

  return {
    getImages,
    urlAPI,
    images,
    isError,
    isLoading,
    NUMBER_OF_PAIRS
  }
}
