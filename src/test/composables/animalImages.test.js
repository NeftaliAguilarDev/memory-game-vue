import { describe, expect, it, vi } from 'vitest'
import { useAnimalImages } from '../../composables/animalImages'

describe('Get Images from API', () => {
  it('Check if endpoint is correct', async () => {
    const { urlAPI } = useAnimalImages()
    expect(urlAPI).toBe(
      'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20'
    )
  })
})
