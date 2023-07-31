import { reactive, ref } from 'vue';
import { useAnimalImages } from '../composables/animalImages';
const { NUMBER_OF_PAIRS } = useAnimalImages()
const isGameStarted = ref(false)
const board = reactive({
  errors: 0,
  movements: 0,
  score: 0,
  time: 0
})

const intervalTime = setInterval(() => {
  board.time++
}, 1000)

const openCards = reactive({
  cardOne: { element: '', name: '' },
  cardTwo: { element: '', name: '' }
})
const startGame = () => {
  const userName = localStorage.getItem('username')
  if (userName) {
    isGameStarted.value = true
  }
}
const flipCard = (event) => {
  const resetOpenCards = () => {
    openCards.cardOne = { element: '', name: '' }
    openCards.cardTwo = { element: '', name: '' }
    if (board.score === NUMBER_OF_PAIRS) {
      alert('game over')
    }
  }
  const compareCards = () => {
    if (openCards.cardOne.name === openCards.cardTwo.name) {
      // Make always visible
      board.score++
      console.log(board.score)
      resetOpenCards()
    } else {
      setTimeout(() => {
        board.errors++
        openCards.cardOne.element.classList.remove('open')
        openCards.cardTwo.element.classList.remove('open')
        resetOpenCards()
      }, 1000)
    }
  }
  // To avoid having 3 openCards
  if (openCards.cardOne.name && openCards.cardTwo.name) return
  event.target.parentElement.classList.add('open')
  if (openCards.cardOne.name === '') {
    openCards.cardOne.element = event.target.parentElement
    openCards.cardOne.name = event.target.name
    return;
  }

  if (openCards.cardTwo.name === '') {
    openCards.cardTwo.element = event.target.parentElement
    openCards.cardTwo.name = event.target.name
    compareCards()
  }

  console.log({
    openCards
  })
};
export { board, flipCard, startGame, isGameStarted }
