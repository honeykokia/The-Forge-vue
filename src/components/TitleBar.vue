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
        <ul class="nav">
            <li><router-link class="nav-link" to="#about">About</router-link></li>
            <li><router-link class="nav-link" to="#skill">Skill</router-link></li>
            <li><router-link class="nav-link" to="#project">Project</router-link></li>
            <li><a href="">Resume</a></li>
            <li></li>
        </ul>
    </div>


</template>

<style scoped>
    .content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
    }
    .title img{
        width: 90px;
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

    .nav{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        list-style-type: none;
    }
    .nav li{
        margin: 0 16px;
        font-size: 28px;
        font-family: "Kanit", serif;
        font-weight: 500;
        font-style: normal;
    }
    .nav li a{
        text-decoration: none;
        color: black;
        padding: 8px 16px;
    }
    .nav li a:hover{
        background-color: #EEEEEE;
    }

</style>