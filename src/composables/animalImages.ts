import { reactive, ref } from 'vue'
export function useAnimalImages () {
  const NUMBER_OF_PAIRS = 9
  const images = reactive([])
  const isLoading = ref(true)
  const isError = ref(false)

  const getImages = async () => {
    try {
      const response = await fetch(
        'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20'
      )
      const { entries } = await response.json()
      entries.forEach((item) => {
        if (images.length < NUMBER_OF_PAIRS) {
          images.push(item.fields?.image?.url)
        }
      })
      // Duplicate de images inserted
      images.push(...images)
      isLoading.value = false
    } catch (error) {
      isError.value = true
      isLoading.value = false
    }
  }
  getImages()

  return {
    images,
    isLoading,
    isError
  }
}
