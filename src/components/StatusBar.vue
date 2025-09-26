<script setup>
defineProps({
    language: {
        type: String
    },
    level: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: true
    },
    classes: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="mb-6">
        <div class="flex justify-between mb-3">
            <span class="font-semibold text-white">{{ language }}</span>
            <span class="text-slate-400 font-medium">{{ level }}</span>
        </div>
        <div class="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div :class="classes" :style="width"></div>
        </div>
    </div>
</template>