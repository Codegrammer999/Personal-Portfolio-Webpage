<script setup>
import { Image } from "@/asyncComponents"

defineProps({
    title: {
        type: String,
        required: false
    },
    stylesForImage: {
        type: String,
        required: false
    }
})
</script>

<template>
    <div class="bg-slate-950 sm:bg-slate-800">
        <div class="flex items-center space-x-6">
            <Image
                src="./Images/me.jpg"
                alt="An image representation of me"
                :classes="stylesForImage"
            />
            <p class="sm:hidden font-bold text-xl">{{ title }}</p>
        </div>
    </div>
</template>
