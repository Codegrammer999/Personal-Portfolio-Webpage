<script setup>
import { MiniHeader, LinkBtn } from "@/asyncComponents";
</script>

<template>
  <div>
    <MiniHeader title="Home" class="sm:hidden p-4" />
    <div
      class="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        ></div>
        <div
          class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style="animation-delay: 2s"
        ></div>
        <div
          class="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style="animation-delay: 4s"
        ></div>
      </div>

      <div class="text-center p-8 relative animate-slideUp">
        <div class="mb-6">
          <div
            class="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-glow"
          >
            <div
              class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center"
            >
              <img src="/Images/me.jpg" alt="me" loading="lazy" class="size-full">
            </div>
          </div>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Hello, I'm <span class="gradient-text">Daniel</span>
        </h1>
        <p class="mt-4 text-2xl font-medium text-slate-300">
          Software Developer & Game Enthusiast
        </p>
        <p
          class="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting innovative solutions with code, building immersive
          experiences, and always pushing the boundaries of what's possible.
        </p>
        <div
          class="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <LinkBtn :to="{ name: 'about' }" class="modern-btn">
            Discover My Story
          </LinkBtn>
          <LinkBtn
            :to="{ name: 'project' }"
            class="modern-btn bg-transparent border-2 border-blue-500 hover:bg-blue-500"
          >
            View My Work
          </LinkBtn>
        </div>
        <div class="mt-16">
          <p
            class="text-4xl rotate-90 font-bold opacity-40 custom-animate-bounce w-fit m-auto"
          >
            &NestedGreaterGreater;
          </p>
        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="relative py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 gradient-text">
          What I Do
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="modern-card p-8 rounded-2xl text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">
              Frontend Development
            </h3>
            <p class="text-slate-400 leading-relaxed">
              Building responsive, interactive user interfaces with Vue.js,
              HTML5, and modern CSS frameworks like Tailwind.
            </p>
          </div>

          <div class="modern-card p-8 rounded-2xl text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">
              Backend Development
            </h3>
            <p class="text-slate-400 leading-relaxed">
              Creating robust server-side applications with PHP Laravel,
              designing efficient database schemas with MySQL.
            </p>
          </div>

          <div class="modern-card p-8 rounded-2xl text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">Game Development</h3>
            <p class="text-slate-400 leading-relaxed">
              Crafting immersive gaming experiences using C# and Godot Engine,
              bringing creative ideas to life.
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <LinkBtn :to="{ name: 'skills' }" class="modern-btn">
          Explore All Skills
        </LinkBtn>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20 text-center relative">
      <div class="glass rounded-3xl p-12 max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-6 gradient-text">
          Let's Build Something Amazing Together!
        </h2>
        <p class="text-xl text-slate-300 mb-8 leading-relaxed">
          Ready to turn your ideas into reality? I'm always excited to
          collaborate on innovative projects.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkBtn
            :to="{ name: 'contact' }"
            class="modern-btn text-lg px-8 py-4"
          >
            Start a Conversation
          </LinkBtn>
          <LinkBtn
            :to="{ name: 'project' }"
            class="modern-btn bg-transparent border-2 border-purple-500 hover:bg-purple-500 text-lg px-8 py-4"
          >
            See My Portfolio
          </LinkBtn>
        </div>
      </div>
    </div>
  </div>
</template>
