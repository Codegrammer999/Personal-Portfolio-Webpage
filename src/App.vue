<script setup>
import { Navigations } from "@/asyncComponents";
import autoAnimate from "@formkit/auto-animate";
import { onMounted, ref } from "vue";
import ScrollToTop from "./components/ScrollToTop.vue";

const animateRoute = ref(null);
onMounted(() => {
  animateRoute.value && autoAnimate(animateRoute.value);
});
</script>

<template>
  <header>
    <Navigations />
  </header>

  <main ref="animateRoute">
    <RouterView />
  </main>

  <footer class="py-8 glass text-center space-y-4 border-t border-white/10">
    <div class="max-w-4xl mx-auto px-6">
      <div
        class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
      >
        <div>
          <p class="text-2xl font-bold gradient-text">Daniel</p>
          <p class="text-slate-400">Software Developer & Game Enthusiast</p>
        </div>
        <div class="flex space-x-6">
          <a
            href="https://github.com/Codegrammer999"
            target="_blank"
            class="text-slate-400 hover:text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="mailto:shyyguyy501@gmail.com"
            class="text-slate-400 hover:text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="border-t border-white/10 pt-4 mt-6">
        <p class="text-slate-400">&copy; 2024 Daniel. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <ScrollToTop />
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
