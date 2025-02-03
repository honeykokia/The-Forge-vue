<script setup>
import logoJpg from '@/assets/jpg/TheForge.jpg'
import githubJpg from '@/assets/jpg/github.jpg'
import { ref } from 'vue';

const logo = ref(logoJpg);
const github = ref(githubJpg);

</script>

<template>
    <div class="content">
        <div class="title">
            <img :src="logo" alt="">
            <p>The<Span style="color: #509088;">Forge</Span></p>   
        </div>

    </div>


</template>

<style scoped>
    .content{
        display: flex;
        justify-content: space-between;
    }
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title img{
        width: 70px;
        height: 100%;
    }
    .title p{
        font-size: 36px;
        text-decoration: none;
        color: gray;
        font-family: "Kanit", serif;
        font-weight: 500;
        font-style: normal;
    }
    
</style>