<script setup lang="ts">
type Route = {
    title: string
    icon: string
    to: string
}
const state = reactive<{items:Route[]}>({
    items: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'About', icon: 'mdi-account', to: '/about' },
        { title: 'Contact', icon: 'mdi-email', to: '/contact' },
        { title: 'Portfolio', icon: 'mdi-briefcase', to: '/portfolio' },
        { title: 'Blog', icon: 'mdi-blogger', to: '/blog' },
    ],
})
</script>
<template>
<nav row end gap-4 px-4 bg-teal text-white> 
    <p v-for="item in state.items" :key="item.title" >
        <router-link :to="item.to" row center px-2 py-2 rounded >
           <Icon :icon="item.icon" mx-2 />
            <span>{{ item.title }}</span>
        </router-link>
    </p>
</nav>

</template>

<style scoped>
.router-link-exact-active {
    @apply bg-accent;
}   

</style>