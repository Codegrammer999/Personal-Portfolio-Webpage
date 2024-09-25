<script setup>
defineProps({
    title: {
        type: String
    }
})
</script>

<template>
    <div class="bg-slate-950 sm:bg-slate-800">
        <div class="flex items-center space-x-6" id="text-container">
            <p class="text-xl duration-1000">{{ title }}</p>
        </div>
    </div>
</template>