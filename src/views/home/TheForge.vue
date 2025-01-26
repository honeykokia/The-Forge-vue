<script setup>
import { useCommonUtils } from '@/composable/useCommonUtils';
import { onMounted } from 'vue';

const baseUrl = import.meta.env.VITE_BASE_URL;
const {checkSession} = useCommonUtils();

onMounted(async()=>{
    try {
        const userDetail = await checkSession(`${baseUrl}/api/users/checksession`)
        console.log(userDetail.email)
    } catch (error) {
    
    }
})

</script>

<template>
    <div class="content">
        <h1>The Forge</h1>
    </div>
</template>

<style scoped>
.content{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    font-size: 72px;
}
</style>