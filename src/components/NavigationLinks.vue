<script setup>
import { HomeIcon, AboutIcon } from "@/asyncComponents"

const emit = defineEmits(['links-clicked'])
const emitClick = () => {
    emit('links-clicked')
}
</script>

<template>
    <div class="flex m-auto gap-y-5 mt-12 sm:mt-0 sm:self-end flex-col sm:flex-row sm:gap-x-4 sm:gap-y-0">
        <router-link 
            :to="{ name: 'home'}"
            @click="emitClick"
            class="cursor-pointer rounded-xl p-1">
            <div class="flex space-x-2 items-center justify-center hover:opacity-50 duration-300">
                <p>Home</p>
                <div class="bg-slate-900 px-2 rounded-lg">
                    <HomeIcon class="size-6 icon"/>
                </div>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'about'}"
            @click="emitClick"
            class="cursor-pointer rounded-xl p-1">
            <div class="flex space-x-2 items-center justify-center hover:opacity-50 duration-300">
                <p>About</p>
                <div class="bg-slate-900 px-2 rounded-lg">
                    <AboutIcon class="size-6 icon"/>
                </div>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'skills'}"
            @click="emitClick"
            class="cursor-pointer rounded-xl p-1">
            <div class="flex space-x-2 items-center justify-center hover:opacity-50 duration-300">
                <p>Skills</p>
                <div class="bg-slate-900 px-2 rounded-lg">
                    <AboutIcon class="size-6 icon"/>
                </div>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'project'}"
            class="cursor-pointer rounded-xl p-1">
            <div class="flex space-x-2 items-center justify-center hover:opacity-50 duration-300" @click="emitClick">
                <p>Projects</p>
                <div class="bg-slate-900 px-2 rounded-lg">
                    <AboutIcon class="size-6 icon"/>
                </div>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'contact'}"
            class="cursor-pointer rounded-xl p-1">
            <div class="flex space-x-2 items-center justify-center hover:opacity-50 duration-300" @click="emitClick">
                <p>Contact</p>
                <div class="bg-slate-900 px-2 rounded-lg">
                    <AboutIcon class="size-6 icon"/>
                </div>
            </div>
        </router-link>
    </div>
</template>