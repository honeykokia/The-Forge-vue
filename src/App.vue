<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SliderBar from './views/home/SliderBar.vue';
</script>

<template>
  <SliderBar></SliderBar>
  <header>
    <h1>header</h1>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
  header{
    width: 100%;
    height: 15vh;
    background-color: aqua;
  }
  main{
    width: 100%;
    height: 85vh;
    background-color: gray;
  }
</style>
