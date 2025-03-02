<script setup>
import { ref } from 'vue';
const props = defineProps({
    imgList: Object,
});
</script>

<template>
    <div v-for="(image,index) in imgList.imagesBlack" :key="index" class="hover-div">
        <v-img :src="imgList.imagesBlack[index]" width="100" height="100" class="default-img"></v-img>
        <v-img :src="imgList.imagesLight[index]" width="100" height="100" class="hover-img"></v-img>
        <p>{{imgList.title[index]}}</p>
    </div>
</template>

<style scoped>


.hover-div{
    width: 150px;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    
}
.hover-div p{
    margin-top: 120px;
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 24px;
    font-family: "Kanit", serif;
    font-weight: 500;
    font-style: normal;
    color: #999999;
}

.default-img {
    position: absolute;
    width: 100%;
    height: 100%;
    /* transition: opacity 0.3s; */
}

.hover-img {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* transition: opacity 0.3s; */
}
.hover-div:hover p {
    color: black;
}

.hover-div:hover .default-img {
    opacity: 0;
}

.hover-div:hover .hover-img {

    opacity: 1;
}
</style>