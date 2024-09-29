<script setup>
import { MiniHeader } from "@/asyncComponents"
import emailjs from "@emailjs/browser"
import autoAnimate from "@formkit/auto-animate"
import { onMounted, reactive, ref, watch } from "vue"

const nameField = ref(null)
const emailField = ref(null)
let isProcessing = ref(false)
const form = ref(null)
const emailMsg = ref(null)
const emailMsgEl = ref(null)
const messageField = ref(null)

const formData = reactive({
    name: '',
    email: '',
    message: '',
    error: null
})

watch(emailMsg,(val)=> {
    if (val) {
        setTimeout(() => {
            emailMsg.value = null
        }, 2000)
    }
})

onMounted(()=> {
    emailMsgEl.value && autoAnimate(emailMsgEl.value)
})

const sendMail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    switch (true) {
        case formData.name.trim() === '':
            formData.error = 'Please enter your name or something you can be called'
            nameField.value.focus()
            break
        case formData.email.trim() === '':
            formData.error = 'Please enter your email address'
            emailField.value.focus()
            break
        case !emailRegex.test(formData.email.trim()):
            formData.error = 'Please enter a valid email address'
            emailField.value.focus()
            break
        case formData.message.trim() === '':
            formData.error = 'Please enter your message'
            messageField.value.focus()
            break
        default:
            try {
                isProcessing.value = true
                formData.error = null
                emailjs.sendForm('service_2oxp01k', 'template_mdtwk1c', form.value, {
                publicKey: 'MxkwwylMO2r8cq-iy'
                }).then((data)=>{
                    if (data.status === 200 && data.text === 'OK') {
                        emailMsg.value = 'Message received. thanks for reaching out'
                        return
                    }
                    console.log(data)
                }, (error)=> {
                    emailMsg.value = 'Something went wrong! ' + error.text
                    console.error(error)
                })
            } catch (error) {
                emailMsg.value = error
                console.log(error)
            }finally {
                isProcessing.value = false
            }
    }
}
</script>

<template>
    <div>
        <MiniHeader 
            title="Contact Me"
            class="sm:hidden p-4"
        />
        <div class="px-10 py-2 lg:max-w-screen-lg m-auto">
            <h1 class="text-bold text-xl text-center">Contact Me</h1>
            <div ref="emailMsgEl" class="text-center">
                <p class="p-2 bg-blue-500 text-slate-50 rounded-lg text-[15px]" v-if="emailMsg"> {{ emailMsg }}</p>
            </div>
            <form @submit.prevent="sendMail" ref="form">
                <div class="flex flex-col pb-3">
                    <label for="name" class="text-sm p-1 cursor-pointer">Name</label>
                    <input type="text" id="name" class="p-2 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" v-model="formData.name" ref="nameField" name="user_name">
                </div>
                <div class="flex flex-col pb-3">
                    <label for="email" class="text-sm p-1 cursor-pointer">Email</label>
                    <input type="email" id="email" class="p-2 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" v-model="formData.email" ref="emailField" name="user_email">
                </div>
                <div class="flex flex-col pb-3">
                    <label for="message" class="text-sm p-1 cursor-pointer">Message</label>
                    <textarea type="text" id="message" class="bg-slate-700 rounded-lg p-2 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" v-model="formData.message" ref="messageField" name="message"></textarea>
                </div>
                <p v-if="formData.error" class="text-blue-500 p-1">{{ formData.error }}</p>
                <div class="text-center">
                    <div class="bg-blue-500 px-8 py-2 rounded-lg font-medium shadow-md hover:bg-blue-600 focus:ring-2 ring-slate-200 transition duration-300 w-full flex justify-center items-center space-x-2" v-if="isProcessing">
                        <div class="animate-spin size-6 border border-slate-50 rounded-full border-t-blue-500"></div>
                        <div>Please wait</div>
                    </div>
                    <button class="bg-blue-500 px-8 py-2 rounded-lg font-medium shadow-md hover:bg-blue-600 focus:ring-2 ring-slate-200 transition duration-300 w-full" v-else>Send Message</button>
                </div>
            </form>
            <div class="py-6 text-center bg-slate-700 mt-4 rounded-lg">
                <h2 class="text-xl font-bold">Alternatives</h2>
                <p class="p-2">If the form says limit exceeded or you wish to use another option, you can contact me using the following below...</p>
                <div>
                    <p class="p-4">Send me an email manually </p>
                    <a href="mailto:shyyguyy501@gmail.com" class="bg-blue-500 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 focus:ring-2 ring-slate-200 transition duration-300">here</a>
                    <br><br>or
                    <p class="p-4">Send a message via </p>
                    <a href="https://wa.me/2349061458909?text=Hello Daniel, %201%20saw%20your%20porfolio%20and%20would%20like%20to%20reach%out..." target="_blank" class="bg-blue-500 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 focus:ring-2 ring-slate-200 transition duration-300">WhatsApp</a>
                </div>
            </div>
        </div>
    </div>
</template>