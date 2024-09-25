<script setup>
defineProps({
    to: {
        required: true
    }
})
</script>

<template>
     <router-link 
        :to="to"
        class="bg-blue-500 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 focus:ring-2 ring-slate-200 transition duration-300">
        <slot/>
      </router-link>
</template>