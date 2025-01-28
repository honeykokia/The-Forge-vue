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
    .left{
        width: 15%;
        height: 100%;
        display: flex;
        padding-left: 15px;
        border: 1px solid red;
        justify-content: center;
    }
    .left p{
    }
    .left-img{
        display: flex;
        width: auto;
        height: 100%;
    }
    .mid{
        width: 30%;
        height: 100%;
        border: 1px solid blue;
        list-style-type: none;
        padding: 0px;
        display: flex;
        justify-content: left;
        align-items: center;
        font-size: 36px;
    }
    .mid li{
        padding-left: 20px;
        
    }
    .mid li a{
        text-decoration: none;
        color: black;
    }
    .right{
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right img{
        width: auto;
        height: 40%;
        
    }
    
</style>