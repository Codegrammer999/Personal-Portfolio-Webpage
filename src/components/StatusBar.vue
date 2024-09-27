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
    <div class="mb-4">
        <div class="flex justify-between mb-1">
            <span>{{ language }}</span>
            <span>{{ level }}</span>
        </div>
        <div class="w-full bg-slate-700 rounded-full h-2">
            <div :class="classes" :style="width"></div>
        </div>
    </div>
</template>