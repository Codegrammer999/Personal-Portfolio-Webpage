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
                alt="An image representstion of me"
                :classes="stylesForImage"
            />
            <p>Hi there! 🤗</p>
        </div>
    </div>
</template>
