<script setup>

</script>

<template>
    <div class="content">
        <v-btn :to="{path: '/'}" style="font-size: 18px;">
            HOME
        </v-btn>
        <v-btn :to="{path: '/about'}" style="font-size: 18px;">
            ABOUT
        </v-btn>
        <v-btn style="font-size: 18px;">
            SKILL
        </v-btn>
        <v-btn style="font-size: 18px;">
            PROJECT
        </v-btn>
        <v-btn style="font-size: 18px;">
            RESUME
        </v-btn>
        <v-card width="400" height="35" elevation="3"></v-card>
        <v-btn href="https://github.com/honeykokia?tab=repositories" target="_blank">
            <v-icon left size="36">mdi-github</v-icon>
        </v-btn>
    </div>

</template>

<style scoped>
.content{
    display: flex;
    padding-top: 20px;
}
</style>