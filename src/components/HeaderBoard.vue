<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    board: {
        type: Object,
        default() {
            return {
                errors: 0,
                score: 0,
                movements: 0,
                time: 0,
            }
        }
    },
})

const errors = computed(() => props.board.errors)
const score = computed(() => props.board.score)
const movements = computed(() => props.board.movements)
const time = computed(() => props.board.time)


</script>
<template>
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-center">Memory Game</h1>
        <div>
            <ol>
                <li>Errors: <span>{{ errors }}</span></li>
                <li>Score: <span>{{ score }}</span></li>
                <li>Movements: <span>{{ movements }}</span></li>
                <li>time: <span>{{ time }}</span></li>
            </ol>
        </div>
    </div>
</template>

<style scoped></style>