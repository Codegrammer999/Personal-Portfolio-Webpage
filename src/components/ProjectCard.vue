<script setup>
import { CodeBlock } from "@/asyncComponents"

defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="bg-slate-800 p-6 rounded-lg shadow-lg mb-6">
        <h3 class="text-lg font-bold mb-2">{{ project.name }}</h3>
        <p class="text-slate-400 mb-4">{{ project.description }}</p>

        <div class="mb-4">
            <strong>Technologies:</strong>
            <ul class="list-disc list-inside">
                <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
            </ul>
        </div>

        <CodeBlock
            :language="project.codeSnippetLang"
            :code="project.codeSnippet"
        />

        <!-- GitHub Link Section -->
        <div class="mt-4 space-x-4">
            <a
                v-if="typeof project.githubLink === 'string'"
                class="inline-block bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-900 duration-500 focus:ring-2 ring-blue-500 hover:shadow-xl"
                :href="project.githubLink"
                target="_blank"
            >
                View on GitHub
            </a>

            <div v-else>
                <a
                    v-if="project.githubLink.frontend"
                    class="inline-block bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-900 duration-500 focus:ring-2 ring-blue-500 hover:shadow-xl"
                    :href="project.githubLink.frontend"
                    target="_blank"
                >
                    View Frontend
                </a>
                <a
                    v-if="project.githubLink.backend"
                    class="inline-block bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-900 duration-500 focus:ring-2 ring-blue-500 hover:shadow-xl"
                    :href="project.githubLink.backend"
                    target="_blank"
                >
                    View Backend
                </a>
            </div>
        </div>
    </div>
</template>
