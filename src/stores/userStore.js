import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore',{
    state: ()=>({
        isLoggedin: false,
        email: 'Gmail',
        name: 'Anonymous',
    }),
    actions: {
        updateEmail(newEmail){
            this.email=newEmail;
        },
        updateName(newName){
            this.name=newName;
        },
        login(){
            this.isLoggedin=true;
        },
        logout(){
            this.isLoggedin=false;
        },
    },
});
