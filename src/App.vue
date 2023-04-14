<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "Oscar Bahamonde Personal's Website",
  meta: [
    { name: 'description', content: 'Oscar Bahamonde Cloud Engineer' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href:'/logo.png'
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
