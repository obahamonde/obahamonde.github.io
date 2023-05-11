<template>
  <button @click="toggleDark()" class="col center btn-icon">
    <Icon
      dark:text-amber
      :icon="isDark ? 'mdi-lightbulb-on' : 'mdi-lightbulb'"
    />
  </button>
</template>
