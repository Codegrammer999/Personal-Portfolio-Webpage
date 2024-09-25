<script setup>
import { NavigationLinks, MiniHeader } from "@/asyncComponents"
import autoAnimate from "@formkit/auto-animate"
import { computed, onMounted, ref } from "vue"

const showMobileNav = ref(false)
const mobileNav = ref(null)

onMounted(()=> {
    mobileNav.value && autoAnimate(mobileNav.value)
})
const toggleNav = ()=> {
    showMobileNav.value = !showMobileNav.value
}
const navToggler = computed(() => showMobileNav.value ? false : true)
</script>

<template>
    <div>
        <div class="absolute right-0 top-3 z-[999] sm:hidden">
            <button @click="toggleNav" class="px-4 py-2 text-2xl rte-90" v-if="navToggler">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <rect y="4" width="24" height="2" rx="1" />
                    <rect y="11" width="24" height="2" rx="1" />
                    <rect y="18" width="24" height="2" rx="1" />
                </svg>
            </button>
            <button @click="toggleNav" class="px-4 text-5xl" v-if="!navToggler">&times;</button>
        </div>
        <nav class="bg-slate-800 h-fit p-4 hidden sm:flex items-center">
            <MiniHeader styles-for-image="size-12 rounded-full"/>
            <NavigationLinks/>
        </nav>
        <div ref="mobileNav">
            <div class="w-1/2 absolute right-0 z-[10] p-8 h-screen bg-slate-800 sm:hidden rounded-r-2xl shadow-2xl" v-if="showMobileNav">
                <NavigationLinks @links-clicked="toggleNav"/>
            </div>
        </div>
    </div>
</template>