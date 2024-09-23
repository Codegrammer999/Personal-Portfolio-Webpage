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
const navToggler = computed(()=> {
    if (showMobileNav.value) {
        return false
    }
    return true
})
</script>

<template>
    <div>
        <div class="absolute right-0 top-0 z-[999] sm:hidden">
            <button @click="toggleNav" class="px-4 py-2 tracking-[5px] font-bold" v-if="navToggler">|||</button>
            <button @click="toggleNav" class="px-4 py-2 text-4xl" v-if="!navToggler">&times;</button>
        </div>
        <nav class="bg-slate-800 h-fit p-4 hidden sm:flex justify-between items-center">
            <MiniHeader styles-for-image="size-12 rounded-full"/>
            <NavigationLinks/>
        </nav>
        <div ref="mobileNav">
            <div class="w-fit absolute right-0 z-[10] py-2 px-4 h-screen bg-slate-800 sm:hidden rounded-r-2xl shadow-2xl" v-if="showMobileNav">
                <NavigationLinks @links-clicked="toggleNav"/>
            </div>
        </div>
    </div>
</template>