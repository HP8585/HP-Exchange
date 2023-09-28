<template>

<div class="text-white duration-700 bg-gray-700 h-screen w-full absolute left-0 top-[4.3em]">
   
   
        <div class="mx-5 my-3 cursor-pointer"><i @click="$emit('close')" class="fa fa-times text-xl"  /></div>
    
    <h1 class="text-center text-3xl ">{{ $t("editProfile") }}</h1>
    <div class="flex flex-col gap-10 items-center justify-center px-10 py-10 w-full ">
        <div class="flex flex-col gap-4 items-center">
            <img v-show="blankPic" src="../assets/blank-profile.webp" class="w-[10em] rounded-full" >
        <img v-show="!blankPic" :src="fileDisplay ? fileDisplay : blankPic" class="w-[10em] h-[10em] object-cover rounded-full" >
        <div>
            <span @click="fileInput?.click()" class="bg-gray-800 px-6 py-1 rounded-lg cursor-pointer hover:bg-gray-600 duration-200">{{ $t("change") }}</span>
            <input ref="fileInput" type="file" @input="changePic" hidden accept=".jpg,.jpeg,.png">
        </div>
    </div>

    <div class="md:w-[20em]">
        <form @submit.prevent="setDataProfile(userName, bio)" class="flex flex-col w-full">
            <label for="username">{{ $t("username") }} :</label>
            <input v-model="userName" @input="usernameF" @compositionend="usernameF" type="text" class="mt-2 rounded-md bg-gray-800 outline-none border-none mb-2 py-1 px-3 w-[12em] md:w-full">
            <span>{{ userNameL }}/20</span>
            <br>
            <label for="username">{{ $t("biography") }} :</label>
            <textarea v-model="bio" @input="bioF"  name="" class="rounded-md scrollbar-thin scrollbar bg-gray-800 outline-none border-none px-3 w-[12em] mb-2 md:w-full mt-2" cols="10" rows="6" id="" style="resize: none;"></textarea>
            <span>{{ bioL }}/80</span>
            <br>

            <input @click="$emit('close')" type="submit" :value="$t('submit')" class="bg-orange-600 w-fit mx-auto py-1 px-2 rounded cursor-pointer hover:bg-orange-500 duration-200">
        </form>
    </div>
    
    </div>
</div>

</template>

<script setup>
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
function setDataProfile(usern, bioo){
    if(userName.value){
        userStore.username = usern
    }
    if(bio.value){
        userStore.biography = bioo
    }

if(fileDisplay.value){
    userStore.avatar = fileDisplay.value
}

const userData = {
    username : userStore.username,
    biography: userStore.biography,
    avatar: userStore.avatar
}

localStorage.setItem('userData', JSON.stringify(userData))
}

const blankPic = ref(true)
const fileInput = ref()
const fileDisplay = ref(null)
const changePic = ()=>{
fileDisplay.value = URL.createObjectURL(fileInput.value.files[0])
blankPic.value = false
}

const userName = ref(null)
const userNameL = ref()

function usernameF(){
    if(userName.value.length < 21){
        //this regex is intended to allow only English alphabet
        userName.value = userName.value.replace(/[^a-zA-Z]/g, '')
        userNameL.value = userName.value.length 
    }
  
if(userName.value.length >= 20){
    userName.value = userName.value.toString().substring(0,20)
   
}else{
    return;
}
}

const bio = ref(null)
const bioL = ref()
function bioF(){
    if(bio.value.length < 81){
        bioL.value = bio.value.length ;
    }

if(bio.value.length >= 80){
    bio.value = bio.value.toString().substring(0,80)
    
}else{
    return;
}
}

</script>