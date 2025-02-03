<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SliderBar from './components/SliderBar.vue';
import TitleBar from './components/TitleBar.vue';
import NavBar from './components/NavBar.vue';

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
    height: 170px;
    background-color: white;
    padding: 20px 150px 0 150px;
  }
  main{
    width: 100%;
    height: calc(100vh - 170px);
    background-color: #99ABAA;
    padding: 0 150px;
  }
</style>
