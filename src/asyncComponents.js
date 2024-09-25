import { defineAsyncComponent } from "vue"
import NavigationSkeleton from "@/components/NavigationSkeleton.vue"
import NavigationLinkSkeleton from "./components/NavigationLinkSkeleton.vue"

export const Navigations = defineAsyncComponent({
    loader: () => import('@/components/Navigations.vue'),
    loadingComponent: NavigationSkeleton
})

export const NavigationLinks = defineAsyncComponent({
    loader: () => import('@/components/NavigationLinks.vue'),
    loadingComponent: NavigationLinkSkeleton
})

export const HomeIcon = defineAsyncComponent({
    loader: () => import('@/components/icons/IconHome.vue')
})

export const AboutIcon = defineAsyncComponent({
    loader: () => import('@/components/icons/IconAbout.vue')
})

export const MiniHeader = defineAsyncComponent({
    loader: () => import('@/components/MiniHeader.vue')
})

export const Image = defineAsyncComponent({
    loader: () => import('@/components/Image.vue')
})

export const Js = defineAsyncComponent({
    loader: () => import('@/components/icons/JsIcon.vue')
})

export const Python = defineAsyncComponent({
    loader: () => import('@/components/icons/PythonIcon.vue')
})

export const htmlIcon = defineAsyncComponent({
    loader: () => import('@/components/icons/HtmlIcon.vue')
})

export const LinkBtn = defineAsyncComponent({
    loader: () => import('@/components/LinkBtn.vue')
})

export const css = defineAsyncComponent({
    loader: () => import('@/components/icons/CssIcon.vue')
})

export const Csharp = defineAsyncComponent({
    loader: () => import('@/components/icons/CsharpIcon.vue')
})

export const git = defineAsyncComponent({
    loader: () => import('@/components/icons/GitIcon.vue')
})

export const github = defineAsyncComponent({
    loader: () => import('@/components/icons/GithubIcon.vue')
})

export const mysql = defineAsyncComponent({
    loader: () => import('@/components/icons/MysqlIcon.vue')
})

export const vue = defineAsyncComponent({
    loader: () => import('@/components/icons/vueLogo.vue')
})

export const taiwind = defineAsyncComponent({
    loader: () => import('@/components/icons/TailwindIcon.vue')
})

export const php = defineAsyncComponent({
    loader: () => import('@/components/icons/PhpIcon.vue')
})

export const laravel = defineAsyncComponent({
    loader: () => import('@/components/icons/Laravel.vue')
})

export const sql = defineAsyncComponent({
    loader: () => import('@/components/icons/Sql.vue')
})