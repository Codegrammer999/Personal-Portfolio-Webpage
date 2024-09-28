<script setup>
import { MiniHeader, Js, php, laravel, css, Csharp, htmlIcon, vue, taiwind, mysql, git, github, Python, sql } from "@/asyncComponents"
import autoAnimate from "@formkit/auto-animate"
import { onMounted, ref } from "vue"

const html = ref('Html </>')
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
        <div class="w-fit m-auto py-4">
            <h1 class="font-semibold text-xl px-2 sm:px-0">Languages</h1>
            <div class="flex flex-wrap justify-center items-center gap-3 bg-slate-700 p-4 rounded-lg m-2 sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p v-text="html"></p>
                    <htmlIcon class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Css</p>
                    <css class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p class="p-1">Javascript</p>
                    <Js class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Php</p>
                    <php class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>C#</p>
                    <Csharp class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Python</p>
                    <Python class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Sql</p>
                    <sql class="size-40"/>
                </div>
            </div>
            <h2 class="font-semibold text-xl px-2 sm:px-0">Frameworks</h2>
            <div class="flex flex-wrap justify-center items-center gap-3 bg-slate-700 p-4 rounded-lg m-2 sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Laravel</p>
                    <laravel class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Vue.Js</p>
                    <vue class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Tailwind</p>
                    <taiwind class="size-40"/>
                </div>
            </div>
            <h3 class="font-semibold text-xl px-2 sm:px-0">Database</h3>
            <div class="flex flex-wrap justify-center items-center gap-3 bg-slate-700 p-4 rounded-lg m-2 sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Mysql</p>
                    <mysql class="size-40"/>
                </div>
            </div>
            <h4 class="font-semibold text-xl px-2 sm:px-0">Version Control</h4>
            <div class="flex flex-wrap justify-center items-center gap-3 bg-slate-700 p-4 rounded-lg m-2 sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Git</p>
                    <git class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-800 sm:w-1/3 shadow-lg">
                    <p>Github</p>
                    <github class="size-40"/>
                </div>
            </div>
        </div>
    </div>
</template>