<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center" v-if="show">

        @click.self="$emit('close')">
        <div class="bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-lg p-6">
            <h2 class="mb-4">{{ skillName }}</h2>
            <div class="relative">
                <video ref="videoPlayer" class="rounded-lg w-full h-auto" :src="'/' + skillName.toLowerCase() + '.mp4'"
                    controls preload="metadata"></video>
                <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 cursor-pointer"
                    @click.stop="togglePlayback"></div>
            </div>
            <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click="$emit('close')">
                Close
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const show = ref(false);
const skillName = ref("");

watch(show, (newVal) => {
    if (!newVal && videoPlayer.value) {
        videoPlayer.value.pause();
    }
});

const videoPlayer = ref<HTMLVideoElement | null>(null);

const togglePlayback = () => {
    if (videoPlayer.value) {
        if (videoPlayer.value.paused) {
            videoPlayer.value.play();
        } else {
            videoPlayer.value.pause();
        }
    }
};

defineProps<{
    show: boolean;
    skillName: string;
}>();

</script>

<style scoped>
.bg-smoke-dark {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
