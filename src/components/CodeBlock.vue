<script setup>
import autoAnimate from "@formkit/auto-animate"
import hljs from "highlight.js"
import 'highlight.js/styles/atom-one-dark.css'
import { onMounted, ref, watch } from "vue"

const codeElement = ref(null)
const code = ref('')
const copyToClipBoardMsg = ref('')
const clipBoardMsgEl = ref(null)

const props = defineProps({
    code: {
        type: String
    },
    language: {
        type: String,
        required: true
    }
})

watch(copyToClipBoardMsg,(val)=> {
    if (val) {
        setTimeout(()=> {
            copyToClipBoardMsg.value = ''
        }, 1000)
    }
})

onMounted(()=> {
    clipBoardMsgEl.value && autoAnimate(clipBoardMsgEl.value)
    code.value = codeElement.value.innerHTML
    hljs.highlightElement(codeElement.value)
})

const copyToClipBoard = () => {
    const text = code.value
    navigator.clipboard.writeText(text)
    .then(()=> {
        copyToClipBoardMsg.value = 'Copied!'
    })
    .catch((error)=> {
        copyToClipBoardMsg.value = 'Error copying to clipboard!' + error
    })
}
</script>

<template>
    <div class="modern-card p-6 rounded-2xl">
        <div class="text-right" v-if="props.code">
            <button class="modern-btn text-sm px-4 py-2" @click="copyToClipBoard">
                <svg class="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                </svg>
                Copy
            </button>
            <p class="text-green-400 mt-2 font-medium" ref="clipBoardMsgEl">{{ copyToClipBoardMsg }}</p>
        </div>
        <pre>
            <code ref="codeElement" class="language-{{ props.language }}">{{ props.code }}</code>
        </pre>
    </div>
</template>