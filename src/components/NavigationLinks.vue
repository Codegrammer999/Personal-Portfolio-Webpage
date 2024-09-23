<script setup>
import { HomeIcon, AboutIcon } from "@/asyncComponents"
</script>

<template>
    <div class="flex gap-y-5 mt-12 sm:mt-0 sm:self-end flex-col sm:flex-row sm:gap-x-4 sm:gap-y-0">
        <router-link 
            :to="{ name: 'home'}"
            class="flex space-x-2 items-center cursor-pointer rounded-xl duration-300 p-1 hover:opacity-50">
            <p>Home</p>
            <div class="bg-slate-900 px-2 rounded-lg">
                <HomeIcon class="size-6 icon"/>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'about'}"
            class="flex space-x-2 items-center cursor-pointer rounded-xl duration-300 p-1 hover:opacity-50">
            <p>About</p>
            <div class="bg-slate-900 px-2 rounded-lg">
                <AboutIcon class="size-6 icon"/>
            </div>
        </router-link>
        <router-link 
            :to="{ name: 'projects'}"
            class="flex space-x-2 items-center cursor-pointer rounded-xl duration-300 p-1 hover:opacity-50">
            <p>Projects</p>
            <div class="bg-slate-900 px-2 rounded-lg">
                <AboutIcon class="size-6 icon"/>
            </div>
        </router-link>
    </div>
</template>