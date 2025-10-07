<script setup>
import { MiniHeader, Js, php, laravel, css, Csharp, htmlIcon, vue, taiwind, mysql, git, github, Python, sql } from "@/asyncComponents"
import autoAnimate from "@formkit/auto-animate"
import { onMounted, ref } from "vue"

const html = ref('HTML')
const animateSvgs = ref(null)

onMounted(()=> {
    animateSvgs.value && autoAnimate(animateSvgs.value)
})
</script>

<template>
    <div ref="animateSvgs">
        <MiniHeader 
            title="My Skills"
            class="sm:hidden p-4 mb-2"
        />
        <div class="max-w-7xl mx-auto py-8 px-4">
            <h1 class="text-4xl font-bold text-center mb-16 gradient-text">My Technical Arsenal</h1>
            
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center text-white">Languages</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white" v-text="html"></p>
                    <htmlIcon class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">CSS</p>
                    <css class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">JavaScript</p>
                    <Js class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">PHP</p>
                    <php class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">C#</p>
                    <Csharp class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">Python</p>
                    <Python class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">SQL</p>
                    <sql class="size-40"/>
                </div>
            </div>
            </div>
            
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center text-white">Frameworks & Libraries</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">Laravel</p>
                    <laravel class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">Vue.js</p>
                    <vue class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">Tailwind CSS</p>
                    <taiwind class="size-40"/>
                </div>
            </div>
            </div>
            
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center text-white">Database</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">MySQL</p>
                    <mysql class="size-40"/>
                </div>
            </div>
            </div>
            
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center text-white">Version Control</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">Git</p>
                    <git class="size-40"/>
                </div>
                    <div class="modern-card flex flex-col items-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
                        <p class="text-lg font-semibold mb-4 text-white">GitHub</p>
                    <github class="size-40"/>
                </div>
            </div>
        </div>
    </div>
</template>