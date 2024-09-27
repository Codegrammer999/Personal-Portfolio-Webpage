<script setup>
import { MiniHeader, StatusBar, LinkBtn } from "@/asyncComponents"
</script>

<template>
    <div>
        <MiniHeader 
            title="About Me"
            class="sm:hidden p-4"
        />
        <div class="sm:max-w-[600px] md:max-w-screen-md xl:max-w-screen-lg m-auto pb-1 pt-2">
            <div class="p-6 bg-slate-800 text-white mb-2 rounded-xl mx-2 sm:mx-0 shadow-lg">
            <h1 class="text-2xl font-bold mb-6">About Me</h1>
            <p class="mb-4">
                Ever since I was a kid, I’ve been fascinated by how technology works. Watching hackers aggressively 
                type away on their keyboards in movies, with random green lines flashing on the screen, left me 
                wondering how it all comes together. That curiosity led me to pursue a career in technology and 
                computer science, and I’ve been hooked ever since.
            </p>
            <p class="mb-4">
                My long-term goal is to either start my own tech company or join an innovative one where I can 
                provide solutions to real-world problems. I’ve got a vision board to keep me motivated, and as long 
                as I’m making a difference, I’m always up for the challenge.
            </p>
            <p class="mb-4">
                When I’m not deep into code, I love watching movies. It’s a great way to unwind and stay inspired, 
                especially when tech and futuristic concepts show up on screen.
            </p>
            </div>
            <div class="p-6 bg-slate-800 text-white mb-2 rounded-xl mx-2 sm:mx-0 shadow-lg">
            <h2 class="text-2xl font-bold mb-4">My Skills</h2>
            <StatusBar
                language="HTML"
                level="Intermediate"
                width="width: 70%"
                classes="bg-blue-500 h-2 rounded-full"
            />
            <StatusBar
                language="CSS"
                level="Intermediate"
                width="width: 65%"
                classes="bg-green-500 h-2 rounded-full"
            />
            <StatusBar
                language="Javascript"
                level="Intermediate"
                width="width: 75%"
                classes="bg-yellow-500 h-2 rounded-full"
            />
            <StatusBar
                language="Python"
                level="Intermediate"
                width="width: 70%"
                classes="bg-pink-500 h-2 rounded-full"
            />
            <div class="text-right p-1">
                <LinkBtn 
                    :to="{ name: 'skills'}">
                    See more
                </LinkBtn>
            </div>
            </div>
            <div class="p-6 bg-slate-800 text-white mb-2 rounded-xl mx-2 sm:mx-0 shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Current Project</h2>
            <div class="animate-fadeIn bg-slate-700 p-4 rounded-lg">
                <p>
                I'm developing a social media application for students in my institution, integrating the student 
                portal for payments and other features. It will also provide a platform for cyber cafes to easily 
                connect with students, share files, and discuss services.
                </p>
            </div>
            <div class="text-center p-2">
                <p class="p-4">Want to find out more?</p>
                <LinkBtn
                    :to="{ name: 'contact'}">
                    Connect
                </LinkBtn>
            </div>
            </div>
        </div>
    </div>
</template>