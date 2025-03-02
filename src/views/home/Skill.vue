<script setup>
import { ref } from 'vue';
import robotJpg from '@/assets/jpg/robot-idea.png';
import { useCommonUtils } from '@/composable/useCommonUtils';
import ImagesList from '@/components/ImagesList.vue';

const {imagesLoad} = useCommonUtils();
const images = imagesLoad();
const robot = ref(robotJpg);
const imgList =ref([
  {
    imagesBlack: [
      images['java.png'],
      images['springboot.png'],
      images['hibernate.png'],
    ],
    imagesLight:[
      images['java2.png'],
      images['springboot2.png'],
      images['hibernate2.png'],
    ],
    title:[
      'JAVA',
      'SpringBoot',
      'Hibernate',
    ]
  },
  {
    imagesBlack: [
      images['html.png'],
      images['css.png'],
      images['javascript.png'],
      images['vuejs.png'],

    ],
    imagesLight:[
      images['html2.png'],
      images['css2.png'],
      images['javascript2.png'],
      images['vuejs2.png'],
    ],
    title:[
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vue3',
    ]
  },
  {
    imagesBlack: [
      images['mssql.png'],
      images['mysql.png'],

    ],
    imagesLight:[
      images['mssql2.png'],
      images['mysql2.png'],
    ],
    title:[
      'MSSQL',
      'MYSQL',
    ]
  },
  {
    imagesBlack: [
      images['git.png'],
      images['azure.png'],
      images['gcp.png'],

    ],
    imagesLight:[
      images['git2.png'],
      images['azure2.png'],
      images['gcp2.png'],
    ],
    title:[
      'Git',
      'Azure',
      'GCP',
    ]
  },
])


</script>

<template>
  <div class="content">
    <div class="left">
        <img :src="robot" alt="">
    </div>
    <div class="right">
        <p class="title">我擅長的技能 <span class="wave">⛏️</span></p>
        <p class="title-text">
        持續學習與精進技術，專注於程式開發與網頁設計。
        </p>
        <div v-for="img in imgList" class="right-images">
          <ImagesList :imgList="img" />
        </div>
    </div>
  </div>
</template>

<style scoped>
.content{
    padding-top: 50px;
    height: 700px;
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
.right-images{
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 30px;
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