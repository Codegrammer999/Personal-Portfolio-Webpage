<script setup>
import { Navigations } from "@/asyncComponents"
import autoAnimate from "@formkit/auto-animate"
import { onMounted, ref } from "vue"

const animateRoute = ref(null)
onMounted(()=> {
  animateRoute.value && autoAnimate(animateRoute.value)
})
</script>

<template>
  <header>
    <Navigations/>
  </header>
  <main ref="animateRoute">
    <RouterView/>
  </main>
  <footer class="py-1.5 bg-slate-800 text-center space-y-2">
    <p><b>&copy;</b>2024</p>
    <p>Coderr999</p>
  </footer>
</template>
