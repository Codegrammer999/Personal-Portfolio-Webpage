<script setup>
import 
    {
        MiniHeader,
        Js,
        php,
        laravel,
        css,
        Csharp,
        htmlIcon,
        vue,
        taiwind,
        mysql,
        git,
        github,
        Python,
        sql
    } from "@/asyncComponents"
import autoAnimate from "@formkit/auto-animate"
import { onMounted, ref } from "vue"

const html = ref('Html </>')
const animateSvgs = ref(null)
const showSkills = ref(false)

onMounted(()=> {
    setTimeout(() => {
        showSkills.value = true
    }, 400)
    animateSvgs.value && autoAnimate(animateSvgs.value, {
        duration: 650
    })
})
</script>

<template>
    <div ref="animateSvgs">
        <MiniHeader 
            title="My Skills"
            class="sm:hidden p-4 mb-2"
        />
        <div v-if="showSkills">
            <h1 class="font-semibold text-xl p-4">Languages</h1>
            <div class="flex flex-wrap justify-center items-center gap-3">
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p v-text="html"></p>
                    <htmlIcon class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Css</p>
                    <css class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p class="p-1">Javascript</p>
                    <Js class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Php</p>
                    <php class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>C#</p>
                    <Csharp class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Python</p>
                    <Python class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Sql</p>
                    <sql class="size-40"/>
                </div>
            </div>
            <h2 class="font-semibold text-xl p-4">Frameworks</h2>
            <div class="flex flex-wrap justify-center items-center gap-3">
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Laravel</p>
                    <laravel class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Vue.Js</p>
                    <vue class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Tailwind</p>
                    <taiwind class="size-40"/>
                </div>
            </div>
            <h3 class="font-semibold text-xl p-4">Database</h3>
            <div class="flex flex-wrap justify-center items-center gap-3">
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Mysql</p>
                    <mysql class="size-40"/>
                </div>
            </div>
            <h4 class="font-semibold text-xl p-4">Version Control</h4>
            <div class="flex flex-wrap justify-center items-center gap-3">
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Git</p>
                    <git class="size-40"/>
                </div>
                <div class="flex flex-col items-center w-full mx-20 sm:mx-0 rounded-xl bg-slate-950 sm:w-1/3">
                    <p>Github</p>
                    <github class="size-40"/>
                </div>
            </div>
        </div>
    </div>
</template>