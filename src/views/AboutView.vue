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
                    I’m a problem-driven developer who enjoys turning ideas into functional, real-world software. I don’t just 
                    write code for the sake of it — I like understanding how systems work, why they break, and how to make them 
                    better. For me, programming is less about syntax and more about thinking clearly and building with purpose.
                </p>
                <p class="mb-6 text-lg leading-relaxed text-slate-300">
                    I’m constantly learning, experimenting, and pushing myself to grow beyond my current limits. Whether it’s 
                    backend logic, frontend experience, or system design, I’m focused on becoming well-rounded and effective. 
                    My goal is to work on products that actually matter — tools people rely on, not just flashy demos.
                </p>
                <p class="mb-6 text-lg leading-relaxed text-slate-300">
                    When I step away from the screen, I reset by watching movies, reading and exploring creative ideas. It helps me stay 
                    balanced, inspired, and mentally sharp — which ultimately makes me a better builder when I’m back in front 
                    of my editor.
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
                <h2 class="text-3xl font-bold mb-6 gradient-text">What I’m Focused On</h2>
                <div class="glass p-6 rounded-2xl">
                    <p class="text-lg leading-relaxed text-slate-300">
                        Right now, I’m sharpening my skills by building scalable, real-world applications and improving how I 
                        design systems from the ground up. I’m focused on writing cleaner code, structuring projects better, 
                        and understanding how products evolve from simple ideas into reliable platforms people can trust.
                    </p>
                </div>
                <div class="text-center pt-6">
                    <p class="text-lg mb-6 text-slate-300">
                        Interested in collaborating or discussing ideas?
                    </p>
                    <LinkBtn :to="{ name: 'contact' }">
                        Get in Touch
                    </LinkBtn>
                </div>
        </div>
        </div>
    </div>
</template>
