<script setup>
import { HomeIcon, AboutIcon } from "@/asyncComponents"

const emit = defineEmits(['links-clicked'])
const emitClick = () => {
    emit('links-clicked')
}
</script>

<template>
    <div class="flex m-auto gap-y-6 mt-12 sm:mt-0 sm:self-end flex-col sm:flex-row sm:gap-x-6 sm:gap-y-0">
        <router-link 
            :to="{ name: 'home'}"
            @click="emitClick"
            class="cursor-pointer rounded-2xl p-3 transition-all duration-300 hover:scale-105">
            <div class="flex space-x-3 items-center justify-center">
                <p class="font-medium">Home</p>
                <div class="modern-card px-3 py-2 rounded-xl">
                    <HomeIcon class="size-6 icon"/>
                </div>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'about'}"
            @click="emitClick"
            class="cursor-pointer rounded-2xl p-3 transition-all duration-300 hover:scale-105">
            <div class="flex space-x-3 items-center justify-center">
                <p class="font-medium">About</p>
                <div class="modern-card px-3 py-2 rounded-xl">
                    <AboutIcon class="size-6 icon"/>
                </div>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'skills'}"
            @click="emitClick"
            class="cursor-pointer rounded-2xl p-3 transition-all duration-300 hover:scale-105">
            <div class="flex space-x-3 items-center justify-center">
                <p class="font-medium">Skills</p>
                <div class="modern-card px-3 py-2 rounded-xl">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-6 icon">
                        <circle cx="12" cy="12" r="10" stroke="#4A5568" stroke-width="2"/>
                        <path d="M12 6V12L16 14" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 15H15" stroke="#4A5568" stroke-width="2" stroke-linecap="round"/>
                        <path d="M15 9H9" stroke="#4A5568" stroke-width="2" stroke-linecap="round"/>
                     </svg>
                </div>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'project'}"
            class="cursor-pointer rounded-2xl p-3 transition-all duration-300 hover:scale-105">
            <div class="flex space-x-3 items-center justify-center" @click="emitClick">
                <p class="font-medium">Projects</p>
                <div class="modern-card px-3 py-2 rounded-xl">
                   <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-6 icon">
  <path d="M3 7L21 7L21 17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7Z" 
        stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 2L15 2L12 6L9 2Z" fill="#4A5568"/>
  <path d="M12 12V15L14 16" stroke="#4A5568" stroke-width="2" stroke-linecap="round"/>
</svg>
                </div>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'contact'}"
            class="cursor-pointer rounded-2xl p-3 transition-all duration-300 hover:scale-105">
            <div class="flex space-x-3 items-center justify-center" @click="emitClick">
                <p class="font-medium">Contact</p>
                <div class="modern-card px-3 py-2 rounded-xl">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-6 icon">
  <path d="M3 7H21V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7Z" 
        stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 8L7 8" stroke="#4A5568" stroke-width="2" stroke-linecap="round"/>
  <path d="M12 12V15L14 16" stroke="#4A5568" stroke-width="2" stroke-linecap="round"/>
</svg>
                </div>
            </div>
        </router-link>
    </div>
</template>
