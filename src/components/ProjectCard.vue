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
    <div class="modern-card p-8 rounded-2xl mb-8 group hover:scale-[1.02] transition-all duration-300">
        <h3 class="text-2xl font-bold mb-4 text-white">{{ project.name }}</h3>
        <p class="text-slate-300 mb-6 text-lg leading-relaxed">{{ project.description }}</p>

        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3 text-white">Technologies Used:</h4>
            <div class="flex flex-wrap gap-2">
                <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300"
                >
                    {{ tech }}
                </span>
            </div>
        </div>

        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3 text-white">Code Preview:</h4>
            <CodeBlock
                :language="project.codeSnippetLang"
                :code="project.codeSnippet"
            />
        </div>

        <!-- GitHub Link Section -->
        <div class="flex flex-wrap gap-4">
            <a
                v-if="typeof project.githubLink === 'string'"
                class="modern-btn"
                :href="project.githubLink"
                target="_blank"
            >
                <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                </svg>
                View on GitHub
            </a>

            <div v-else class="flex flex-wrap gap-4">
                <a
                    v-if="project.githubLink.frontend"
                    class="modern-btn"
                    :href="project.githubLink.frontend"
                    target="_blank"
                >
                    <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                    </svg>
                    Frontend Code
                </a>
                <a
                    v-if="project.githubLink.backend"
                    class="modern-btn bg-transparent border-2 border-purple-500 hover:bg-purple-500"
                    :href="project.githubLink.backend"
                    target="_blank"
                >
                    <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                    </svg>
                    Backend Code
                </a>
            </div>
        </div>
    </div>
</template>
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

            <div v-else class="flex justify-center space-x-2">
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
