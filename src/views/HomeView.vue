<script setup>
import { MiniHeader, LinkBtn } from "@/asyncComponents"
</script>

<template>
  <div>
    <MiniHeader 
      title="Home"
      class="sm:hidden p-4"
    />
    <div class="min-h-screen flex items-center justify-center bg-slate-900">
      <div class="text-center p-8">
        <h1 class="text-4xl md:text-6xl font-bold opacity-80">Hello, I'm Daniel</h1>
        <p class="mt-4 text-xl">Software Developer & Game Enthusiast</p>
        <p class="mt-2">Crafting solutions with code and always learning.</p>
        <div class="mt-8 opacity-100 cursor-pointer">
          <LinkBtn :to="{ name: 'about'}">See more</LinkBtn>
        </div>
        <p class="text-4xl mt-6 rotate-90 font-bold opacity-40 custom-animate-bounce w-fit m-auto">&NestedGreaterGreater;</p>
      </div>
    </div>
    <div class="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 bg-slate-700 py-14">
      <div class="bg-slate-800 p-8 rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold mb-3">Frontend Development</h3>
        <p>Vue.js, HTML, css (Tailwind)</p>
      </div>
      <div class="bg-slate-800 p-8 rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold mb-3">Backend Development</h3>
        <p>Php (Laravel), MySQL</p>
      </div>
      <div class="bg-slate-800 p-8 rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold mb-3">Game Development</h3>
        <p>C#, Godot Engine</p>
      </div>
      <div class="absolute bottom-4 right-4">
        <LinkBtn 
          :to="{ name: 'skills'}">
          See more...
        </LinkBtn>
      </div>
    </div>
    <div class="py-16 bg-slate-900 max-w-7xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Let's Collaborate!</h2>
      <p class="mb-6">Feel free to reach out to me</p>
      <LinkBtn :to="{ name: 'contact' }">Contact me</LinkBtn>
    </div>
  </div>
</template>