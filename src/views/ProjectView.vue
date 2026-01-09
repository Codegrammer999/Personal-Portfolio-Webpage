<script setup>
import projectsData from "@/assets/Projects.json";
import { ProjectCard } from "@/asyncComponents";
</script>

<template>
  <div class="min-h-screen text-white py-8">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-center mb-4 gradient-text">
        My Projects
      </h1>
      <p class="text-xl text-center text-slate-300 mb-12">
        Explore the solutions I've built
      </p>

      <ProjectCard
        v-for="project in projectsData"
        :key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>
