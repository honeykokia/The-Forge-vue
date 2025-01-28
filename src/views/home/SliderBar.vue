<script setup>
import memberAvatar from '@/assets/jpg/member.jpg';
import { useUserStore } from '@/stores/userStore';
import { ref, watch } from 'vue';

const memberPicture = ref(memberAvatar)
const userStore  = useUserStore();


</script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
      >
        <v-list>
          <v-list-item
            :prepend-avatar="memberPicture"
            :subtitle="userStore.email"
            :title="userStore.name"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item 
            prepend-icon="mdi-account" 
            :title="userStore.isLoggedin ? 'Logout' : 'Login' " 
            value="login"
            to="/login">
          </v-list-item>
          <v-list-item 
            prepend-icon="mdi-account-multiple" 
            title="Shared with me" 
            value="shared">
          </v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
<style scoped></style>