<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SliderBar from './components/SliderBar.vue';
import TitleBar from './components/TitleBar.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="app-container">
      <header>
      <TitleBar></TitleBar>
      <NavBar></NavBar>
    </header>
    <main>
      <RouterView/>
    </main>
  </div>

</template>

<style scoped>

  .app-container{
    width: 1600px;
    height: 100%;
    margin: 0 auto;
  }
  header{
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 170px;
    background-color: white;
    /* padding: 20px 150px 0 150px; */
  }
  main{
    width: 100%;
    height: calc(100vh - 170px);
    border:1px solid #99ABAA;
  }
  @media (max-width: 1600px) {  /* 1024px ~ 1600px */
    .app-container{
      width: 80%;
    }
  }
  @media (max-width: 1024px) {  /* 當螢幕 ≤ 1024px */
    .app-container{
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    .app-container {
      width: 70%;
    }
  }
</style>
