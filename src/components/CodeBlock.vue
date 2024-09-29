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
    <div class="bg-slate-900 p-4 rounded-md">
        <div class="text-right" v-if="props.code">
            <button class="cursor-pointer text-right" @click="copyToClipBoard">Copy</button>
            <p class="text-blue-500" ref="clipBoardMsgEl">{{ copyToClipBoardMsg }}</p>
        </div>
        <pre>
            <code ref="codeElement" class="language-{{ props.language }}">{{ props.code }}</code>
        </pre>
    </div>
</template>