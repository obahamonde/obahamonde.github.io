<script setup lang="ts">
const { state } = useStore();
</script>
<template>
    <div br fixed row gap-4 py-2 center bg-primary text-white w-full mx-auto shadow-lg shadow-gray-500
        v-for="m in state.messages">
        <span font-italic> Oscar Bahamonde says: </span><strong font-sans drop-shadow>{{ m }}</strong>
        <Icon icon="mdi-close" class="cp scale transition duration-500 ease-in-out hover:scale-125 hover:text-red-500"
            @click="state.messages.splice(state.messages.indexOf(m), 1)" />
    </div>
</template>
