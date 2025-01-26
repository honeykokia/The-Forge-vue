<script setup>
import memberAvatar from '@/assets/jpg/member.jpg';
import { ref } from 'vue';

const memberAvatarRef = ref(memberAvatar)

</script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            :prepend-avatar="memberAvatarRef"
            subtitle="gmail"
            title="anonymous"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item 
            prepend-icon="mdi-account" 
            title="Login" 
            value="login"
            to="/login">
          </v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
<style scoped></style>