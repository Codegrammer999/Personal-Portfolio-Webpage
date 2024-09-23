<script setup>
import { NavigationLinks, MiniHeader } from "@/asyncComponents"
import autoAnimate from "@formkit/auto-animate"
import { onMounted, ref } from "vue"

const showMobileNav = ref(false)
const mobileNav = ref(null)
onMounted(()=> {
    mobileNav.value && autoAnimate(mobileNav.value)
})
const toggleNav = (event)=> {
    showMobileNav.value = !showMobileNav.value
    if (event.target.innerHTML === '|||') {
        event.target.innerHTML = '&times;'
        event.target.classList.remove('tracking-[5px]', 'font-bold')
        event.target.classList.add('text-4xl')
        return
    }
    event.target.innerHTML = '|||'
    event.target.classList.remove('text-4xl')
    event.target.classList.add('tracking-[5px]', 'font-bold')
}
</script>

<template>
    <div>
        <div class="absolute right-0 top-0 z-[999] sm:hidden">
            <button @click="toggleNav" class="px-4 py-2 tracking-[5px] font-bold">|||</button>
        </div>
        <nav class="bg-slate-800 h-fit p-4 hidden sm:flex justify-between items-center rounded-b-xl">
            <MiniHeader/>
            <NavigationLinks/>
        </nav>
        <div ref="mobileNav">
            <div class="w-fit absolute right-0 z-[10] py-2 px-4 h-screen bg-slate-800 sm:hidden rounded-r-2xl" v-if="showMobileNav">
                <NavigationLinks/>
            </div>
        </div>
    </div>
</template>