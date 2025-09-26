<script setup>
import { MiniHeader, StatusBar, LinkBtn } from "@/asyncComponents"
</script>

<template>
    <div>
        <MiniHeader 
            title="About Me"
            class="sm:hidden p-4"
        />
        <div class="sm:max-w-[600px] md:max-w-screen-md xl:max-w-screen-lg m-auto pb-8 pt-8">
            <div class="modern-card p-8 text-white mb-8 rounded-2xl mx-4 sm:mx-0 animate-slideUp">
            <h1 class="text-4xl font-bold mb-8 gradient-text">About Me</h1>
            <p class="mb-6 text-lg leading-relaxed text-slate-300">
                Ever since I was a kid, I’ve been fascinated by how technology works. Watching hackers aggressively 
                type away on their keyboards in movies, with random green lines flashing on the screen, left me 
                wondering how it all comes together. That curiosity led me to pursue a career in technology and 
                computer science, and I’ve been hooked ever since.
            </p>
            <p class="mb-6 text-lg leading-relaxed text-slate-300">
                My long-term goal is to either start my own tech company or join an innovative one where I can 
                provide solutions to real-world problems. I’ve got a vision board to keep me motivated, and as long 
                as I’m making a difference, I’m always up for the challenge.
            </p>
            <p class="mb-6 text-lg leading-relaxed text-slate-300">
                When I’m not deep into code, I love watching movies. It’s a great way to unwind and stay inspired, 
                especially when tech and futuristic concepts show up on screen.
            </p>
            </div>
            <div class="modern-card p-8 text-white mb-8 rounded-2xl mx-4 sm:mx-0 animate-slideUp" style="animation-delay: 0.2s;">
            <h2 class="text-3xl font-bold mb-6 gradient-text">My Skills</h2>
            <StatusBar
                language="HTML"
                level="Intermediate"
                width="width: 70%"
                classes="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-500"
            />
            <StatusBar
                language="CSS"
                level="Intermediate"
                width="width: 65%"
                classes="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-500"
            />
            <StatusBar
                language="Javascript"
                level="Intermediate"
                width="width: 75%"
                classes="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-500"
            />
            <StatusBar
                language="Python"
                level="Intermediate"
                width="width: 70%"
                classes="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-500"
            />
            <div class="text-right pt-4">
                <LinkBtn 
                    :to="{ name: 'skills'}">
                    Explore All Skills
                </LinkBtn>
            </div>
            </div>
            <div class="modern-card p-8 text-white mb-8 rounded-2xl mx-4 sm:mx-0 animate-slideUp" style="animation-delay: 0.4s;">
            <h2 class="text-3xl font-bold mb-6 gradient-text">Current Project</h2>
            <div class="glass p-6 rounded-2xl">
                <p class="text-lg leading-relaxed text-slate-300">
                I'm developing a social media application for students in my institution, integrating the student 
                portal for payments and other features. It will also provide a platform for cyber cafes to easily 
                connect with students, share files, and discuss services.
                </p>
            </div>
            <div class="text-center pt-6">
                <p class="text-lg mb-6 text-slate-300">Want to find out more?</p>
                <LinkBtn
                    :to="{ name: 'contact'}">
                    Let's Connect
                </LinkBtn>
            </div>
            </div>
        </div>
    </div>
</template>