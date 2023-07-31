import { reactive, ref } from 'vue'
import { useAnimalImages } from '../composables/animalImages'
const { NUMBER_OF_PAIRS } = useAnimalImages()
const isGameStarted = ref(false)
const board = reactive({
  errors: 0,
  movements: 0,
  points: 0,
  time: 0
})
let intervalTime = null
const openCards = reactive({
  cardOne: { element: '', name: '' },
  cardTwo: { element: '', name: '' }
})
const startGame = () => {
  const userName = localStorage.getItem('username')
  if (userName) {
    isGameStarted.value = true
    intervalTime = setInterval(() => {
      board.time++
    }, 1000)
  }
}
const flipCard = (event) => {
  const resetOpenCards = () => {
    openCards.cardOne = { element: '', name: '' }
    openCards.cardTwo = { element: '', name: '' }
    if (board.points === NUMBER_OF_PAIRS) {
      alert('game over')
    }
  }
  const compareCards = () => {
    if (openCards.cardOne.name === openCards.cardTwo.name) {
      // Make always visible
      board.points++
      console.log(board.points)
      resetOpenCards()
    } else {
      setTimeout(() => {
        board.errors++
        openCards.cardOne.element.classList.remove('open')
        openCards.cardTwo.element.classList.remove('open')
        resetOpenCards()
      }, 600)
    }
  }
  // To avoid having 3 openCards
  if (openCards.cardOne.name && openCards.cardTwo.name) return
  event.target.parentElement.classList.add('open')
  if (openCards.cardOne.name === '') {
    openCards.cardOne.element = event.target.parentElement
    openCards.cardOne.name = event.target.name
    return
  }

  if (openCards.cardTwo.name === '') {
    openCards.cardTwo.element = event.target.parentElement
    openCards.cardTwo.name = event.target.name
    compareCards()
  }

  console.log({
    openCards
  })
}
export { board, flipCard, startGame, isGameStarted }
