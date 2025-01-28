<script setup>
import router from '@/router';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';

const baseUrl = import.meta.env.VITE_BASE_URL;
const userStore = useUserStore();
const form = ref(false);
const email = ref(null);
const password = ref(null);
const loading = ref(false);

const onSubmit =async ()=>{
    if(!form.value) return;
    loading.value=true;
    setTimeout(()=>{
        loading.value=false;
    },2000)

    const loginDto = {
        email: email.value,
        password: password.value,
    }

    const response = await fetch(`${baseUrl}/api/users/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        credentials: "include",
        body: JSON.stringify(loginDto),
    });

    if (!response.ok){
        throw new Error('Response Fail');
    }
    userStore.login();
    const data = await response.text();

    
    router.push('/');

};

const required = (v)=>{
    return !!v || 'Field is required';
};


</script>
<template>
    <v-sheet class="pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
            v-model="form"
            @submit.prevent="onSubmit"
        >
            <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="Email"
            clearable
            ></v-text-field>

            <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            label="Password"
            placeholder="Enter your password"
            clearable
            ></v-text-field>

            <br>

            <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
            >
            Sign In
            </v-btn>
        </v-form>
        </v-card>
    </v-sheet>
</template>
<style scoped>

</style>