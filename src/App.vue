<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SliderBar from './views/home/SliderBar.vue';
import TitleBar from './views/home/TitleBar.vue';
import NavBar from './views/home/NavBar.vue';

</script>

<template>

  <header>
    <TitleBar></TitleBar>
    <NavBar></NavBar>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
  header{
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 22vh;
    background-color: white;
    padding: 10px 150px 0 150px;
  }
  main{
    width: 100%;
    height: 80vh;
    background-color: #99ABAA;
    padding: 0 150px;
  }
</style>
