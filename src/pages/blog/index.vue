<script setup lang="ts">
const blogposts = ref([
   {
    to: '/blog/requests',
    title: 'Are you still using Requests?',
    icon: 'mdi-earth', 
   },
   {
    to: '/blog/enumerator',
    title: 'Build your own Enumerator tool with Python',
    icon: 'mdi-language-python',
   },
   {
    to: '/blog/aiofauna',
    title: 'Aiofauna: Asynchronous ODM and web framework around FaunaDB',
    icon: 'mdi-web',
   },
   {
    to: '/blog/dns',
    title: 'DNS: Domain Name System',
    icon: 'mdi-dns', 
   }
])
</script>
<template>
<nav gap-4 px-4 bg-primary text-white h-100vh col center > 
    <p v-for="item in blogposts" :key="item.title" >
        <router-link :to="item.to" row center px-2 py-2 rounded hover:bg-success hover:text-accent>
           <Icon :icon="item.icon" mx-2 />
            <span>{{ item.title }}</span>
        </router-link>
        <hr />
    </p>
</nav>
</template>