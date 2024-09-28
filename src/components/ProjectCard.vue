<script setup>
import CodeBlock from './CodeBlock.vue'

defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="bg-slate-800 p-6 rounded-lg shadow-lg mb-6">
        <h3 class="text-2xl font-bold mb-2">{{ project.name }}</h3>
        <p class="text-slate-400 mb-4">{{ project.description }}</p>
        <div class="mb-4">
            <strong>Technologies:</strong>
            <ul class="list-disc list-inside">
                <li v-for="tech in project.technologies" :key="tech"> {{ tech }}</li>
            </ul>
        </div>
        <CodeBlock
            :language="project.codeSnippetLang"
            :code="project.codeSnippet"
        />
        <a
            class="inline-block bg-slate-600 text-white px-4 py-2 rounded mt-4"
            :href="project.githubLink"
            target="_blank"
            >
            View on Github
        </a>
    </div>
</template>