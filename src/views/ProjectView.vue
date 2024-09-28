<script setup>
import projectsData from '@/assets/Projects.json'
import { ProjectCard } from "@/asyncComponents"
</script>

<template>
    <div class="p-6 bg-slate-900 min-h-screen text-white">
        <h2 class="text-xl font-bold mb-4">My Projects</h2>
        <ProjectCard
            v-for="project in projectsData"
            :key="project.name"
            :project="project"
        />
    </div>
</template>