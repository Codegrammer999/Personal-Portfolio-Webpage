<script setup>
import { MiniHeader } from "@/asyncComponents";
import emailjs from "@emailjs/browser";
import autoAnimate from "@formkit/auto-animate";
import { onMounted, reactive, ref, watch } from "vue";

const nameField = ref(null);
const emailField = ref(null);
let isProcessing = ref(false);
const form = ref(null);
const emailMsg = ref(null);
const emailMsgEl = ref(null);
const messageField = ref(null);

const formData = reactive({
  name: "",
  email: "",
  message: "",
  error: null,
});

watch(emailMsg, (val) => {
  if (val) {
    setTimeout(() => {
      emailMsg.value = null;
    }, 2000);
  }
});

onMounted(() => {
  emailMsgEl.value && autoAnimate(emailMsgEl.value);
});

const sendMail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  switch (true) {
    case formData.name.trim() === "":
      formData.error = "Please enter your name or something you can be called";
      nameField.value.focus();
      break;
    case formData.email.trim() === "":
      formData.error = "Please enter your email address";
      emailField.value.focus();
      break;
    case !emailRegex.test(formData.email.trim()):
      formData.error = "Please enter a valid email address";
      emailField.value.focus();
      break;
    case formData.message.trim() === "":
      formData.error = "Please enter your message";
      messageField.value.focus();
      break;
    default:
      isProcessing.value = true;
      formData.error = null;

      if (navigator.onLine) {
        emailjs
          .sendForm("service_hsvi6qj", "template_mdtwk1c", form.value, {
            publicKey: "MxkwwylMO2r8cq-iy",
          })
          .then(
            (data) => {
              if (data.status === 200 && data.text === "OK") {
                emailMsg.value = "Message received. thanks for reaching out";
                isProcessing.value = false;
                formData.email = "";
                formData.name = "";
                formData.message = "";
                formData.error = null;
                return;
              }
              console.log(data); //log for future use or debugging
            },
            (error) => {
              emailMsg.value = `Something went wrong: ${error.text} \n Please use the alternatives below to contact me if issue persist.`;
              console.error(error);
              isProcessing.value = false;
            }
          );
        return;
      }

      emailMsg.value = "No internet connection!, Please try again later";
      isProcessing.value = false;
  }
};
</script>

<template>
  <div>
    <MiniHeader title="Contact Me" class="sm:hidden p-4" />
    <div class="px-6 py-8 lg:max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-4 gradient-text">
        Let's Connect
      </h1>
      <p class="text-xl text-center text-slate-300 mb-12">
        Ready to bring your ideas to life? Let's start a conversation.
      </p>

      <div ref="emailMsgEl" class="text-center">
        <p
          class="modern-card p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl text-lg font-medium"
          v-if="emailMsg"
        >
          {{ emailMsg }}
        </p>
      </div>

      <div class="modern-card p-8 rounded-2xl mb-8">
        <form @submit.prevent="sendMail" ref="form" class="space-y-6">
          <div class="flex flex-col">
            <label
              for="name"
              class="text-lg font-semibold mb-3 text-white cursor-pointer"
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="p-4 bg-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder-slate-400"
              placeholder="Your name"
              v-model="formData.name"
              ref="nameField"
              name="user_name"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="email"
              class="text-lg font-semibold mb-3 text-white cursor-pointer"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="p-4 bg-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder-slate-400"
              placeholder="your.email@example.com"
              v-model="formData.email"
              ref="emailField"
              name="user_email"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="message"
              class="text-lg font-semibold mb-3 text-white cursor-pointer"
              >Message</label
            >
            <textarea
              id="message"
              class="bg-slate-700 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder-slate-400 resize-none"
              placeholder="Tell me about your project or just say hello..."
              v-model="formData.message"
              ref="messageField"
              name="message"
            ></textarea>
          </div>

          <p v-if="formData.error" class="text-red-400 font-medium">
            {{ formData.error }}
          </p>

          <div class="text-center">
            <div
              class="modern-btn w-full flex justify-center items-center space-x-3 py-4"
              v-if="isProcessing"
            >
              <div
                class="animate-spin w-6 h-6 border-2 border-white rounded-full border-t-transparent"
              ></div>
              <span class="text-lg font-semibold">Sending Message...</span>
            </div>
            <button class="modern-btn w-full text-lg font-semibold py-4" v-else>
              Send Message
              <svg
                class="w-5 h-5 ml-2 inline"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div class="modern-card p-8 rounded-2xl text-center">
        <h2 class="text-2xl font-bold mb-4 gradient-text">
          Alternative Ways to Reach Me
        </h2>
        <p class="text-slate-300 mb-8 leading-relaxed">
          Prefer a different communication method? No problem! Here are other
          ways to get in touch.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:shyyguyy501@gmail.com"
            class="modern-btn flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            Send Email
          </a>
          <a
            href="https://wa.me/2349061458909?text=Hello Daniel, %201%20saw%20your%20porfolio%20and%20would%20like%20to%20reach%out..."
            target="_blank"
            class="modern-btn bg-transparent border-2 border-green-500 hover:bg-green-500 flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"
              />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
