<template>
  <header>
    <Navigation />
  </header>

  <main>
    <RouterView />
  </main>
</template>
<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation/index.vue'
</script>
<style>
@import '@/assets/base.css';
</style>
