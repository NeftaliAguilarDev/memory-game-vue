<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    board: {
        type: Object,
        default() {
            return {
                errors: 0,
                points: 0,
                movements: 0,
                time: 0,
            }
        }
    },
})

const errors = computed(() => props.board.errors)
const points = computed(() => props.board.points)
const movements = computed(() => props.board.movements)
const time = computed(() => props.board.time)


</script>
<template>
    <div class="flex flex-col md:flex-row justify-between items-center mt-10">
        <h1 class="text-3xl font-bold text-center text-green-modyo mb-5">Memory Game</h1>
        <div>
            <ol class="grid grid-cols-2 lg:grid-cols-4 p-5 rounded-md text-white text-center gap-5 bg-green-modyo">
                <li>Errors: <span>{{ errors }}</span></li>
                <li>Points: <span>{{ points }}</span></li>
                <li>Movements: <span>{{ movements }}</span></li>
                <li>Time: <span>{{ time }}</span></li>
            </ol>
        </div>
    </div>
</template>

<style scoped></style>