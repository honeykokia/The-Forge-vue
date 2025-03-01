<script setup>
import { ref } from 'vue';
import robotJpg from '@/assets/jpg/robot3.png';

const robot = ref(robotJpg);
</script>

<template>
  <div class="content">
    <div class="left">
        <img :src="robot" alt="">
    </div>
    <div class="right">
        <p class="title">我擅長的事 <span class="wave">⛏️</span></p>
        <p class="title-text">
        持續學習與精進技術，專注於程式開發與網頁設計。
        </p>
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
.left{
  width: 50%;
  height: 100%;
}
.left img {
    width: 100%;
    height: 100%;
  }
.right{
  width: 50%;
  height: 100%;
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
</style>