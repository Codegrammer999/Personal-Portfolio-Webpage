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
        class="modern-btn inline-block text-center">
        <slot/>
      </router-link>
</template>