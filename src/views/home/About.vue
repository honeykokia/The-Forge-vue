<script setup>
import robotJpg from '@/assets/jpg/robot2.png';

import { ref } from 'vue';

const robot = ref(robotJpg);
</script>

<template>
  <div class="content">
    <div class="left">
      <p class="title">Hi，我是 李韋融 <span class="wave">👋</span></p>
      <p class="title-text">
      目前在學習前後端WEB開發，主要技術JAVA / SpringBoot / Veu3 / MYSQL，對寫程式很有興趣，這是我自己設計的作品集網頁，歡迎來逛逛！
      </p>
      <v-btn icon href="https://github.com/honeykokia?tab=repositories" target="_blank" style="margin-top: 50px;">
          <v-icon left size="36">mdi-github</v-icon>
      </v-btn>
    </div>
    <div class="right">
      <img :src="robot" alt="">
    </div>
  </div>

</template>

<style scoped>
  .content{
    padding-top: 50px;
    height: 600px;
    width: 100%;
    display: flex;
  }
  .left{
    width: 50%;
    height: 100%;
  }
  .right{
    width: 50%;
    height: 100%;
  }
  .right img {
    width: 100%;
    height: 100%;
  }
  .title{
    padding-bottom: 30px;
    font-size: 48px;
    font-weight: bold;
    color: black;
  }
  .title-text{
    font-size: 24px;
    color: black;
  }
  .wave {
    display: inline-block;
    font-size: 48px;
    animation: wave 2.5s infinite ease-in-out;
    transform-origin: bottom right; /* 設定旋轉原點為右下角 */
  }

  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(20deg); } /* 瞬間往右揮手 */
    30% { transform: rotate(-15deg); } /* 回彈 */
    50% { transform: rotate(10deg); } /* 再次小幅擺動 */
    100% { transform: rotate(0deg); } /* 回到原位 */
  }

  @media (max-width:1600px){
      .right img {
      width: 80%;
      height: 80%;
    }
  }

</style>