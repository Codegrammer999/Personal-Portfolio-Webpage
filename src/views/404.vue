<script setup>
import { LinkBtn } from "@/asyncComponents"
</script>
<template>
    <div class="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 class="font-bold text-2xl">404</h1>
        <p>The requested page was not found!</p>
        <LinkBtn
            :to="{ name: 'home'}"> 
            <span class="font-bold">&larrhk;</span>
            Back to home
        </LinkBtn>
    </div>
</template>