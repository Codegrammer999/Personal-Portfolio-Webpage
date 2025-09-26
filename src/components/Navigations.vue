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
        <div class="absolute right-4 top-4 z-[999] sm:hidden">
            <button @click="toggleNav" class="modern-card p-3 rounded-xl hover:scale-105 transition-transform" v-if="navToggler">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <rect y="4" width="24" height="2" rx="1" />
                    <rect y="11" width="24" height="2" rx="1" />
                    <rect y="18" width="24" height="2" rx="1" />
                </svg>
            </button>
            <button @click="toggleNav" class="modern-card p-3 rounded-xl text-3xl hover:scale-105 transition-transform" v-if="!navToggler">&times;</button>
        </div>
        <!-- Desktop -->
        <nav class="glass h-fit p-6 hidden sm:flex items-center backdrop-blur-md border-b border-white/10">
            <MiniHeader/>
            <NavigationLinks/>
        </nav>
        <!-- mobile -->
        <div ref="mobileNav">
            <div class="w-80 absolute right-0 z-[10] p-8 h-screen glass sm:hidden rounded-l-3xl shadow-2xl backdrop-blur-xl" v-if="showMobileNav">
                <NavigationLinks @links-clicked="toggleNav"/>
            </div>
        </div>
    </div>
</template>