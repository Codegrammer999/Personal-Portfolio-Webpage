<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    classes: {
        required: true
    }
})
</script>

<template>
    <img 
        :src="src" 
        :alt="alt"
        :class="classes"
        loading="lazy"
    >
</template>