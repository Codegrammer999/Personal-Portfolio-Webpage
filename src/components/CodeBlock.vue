<script setup>
import hljs from "highlight.js"
import 'highlight.js/styles/atom-one-dark.css'
import { onMounted, ref } from "vue"

const codeElement = ref(null)

const props = defineProps({
    code: {
        type: String
    },
    language: {
        type: String
    }
})

onMounted(()=> {
    if (codeElement.value) {
        codeElement.value = props.code
    }
    hljs.highlightElement(codeElement.value)
})
</script>

<template>
    <pre class="bg-slate-900 p-4 rounded-md">
        <code ref="codeElement" class="language-{{ language }}"></code>
    </pre>
</template>