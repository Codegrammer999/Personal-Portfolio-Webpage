<script setup>
import projectsData from '@/assets/Projects.json'
import ProjectCard from '@/components/ProjectCard.vue'

console.log(projectsData)
</script>

<template>
    <div class="p-6 bg-slate-900 min-h-screen text-white">
        <h2 class="text-3xl font-bold mb-6">My Projects</h2>
        <ProjectCard
            v-for="project in projectsData"
            :key="project.name"
            :project="projectsData"
        />
    </div>
</template>