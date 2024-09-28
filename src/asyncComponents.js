import { defineAsyncComponent } from "vue"
import NavigationSkeleton from "@/components/NavigationSkeleton.vue"
import NavigationLinkSkeleton from "@/components/NavigationLinkSkeleton.vue"
import CodeBlockSkeleton from "@/components/CodeBlockSkeleton.vue"
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton.vue"
import SkillsSvgSkeleton from "@/components/SkillsSvgSkeleton.vue"

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
    loader: () => import('@/components/icons/JsIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const Python = defineAsyncComponent({
    loader: () => import('@/components/icons/PythonIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const htmlIcon = defineAsyncComponent({
    loader: () => import('@/components/icons/HtmlIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const LinkBtn = defineAsyncComponent({
    loader: () => import('@/components/LinkBtn.vue')
})

export const css = defineAsyncComponent({
    loader: () => import('@/components/icons/CssIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const Csharp = defineAsyncComponent({
    loader: () => import('@/components/icons/CsharpIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const git = defineAsyncComponent({
    loader: () => import('@/components/icons/GitIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const github = defineAsyncComponent({
    loader: () => import('@/components/icons/GithubIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const mysql = defineAsyncComponent({
    loader: () => import('@/components/icons/MysqlIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const vue = defineAsyncComponent({
    loader: () => import('@/components/icons/vueLogo.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const taiwind = defineAsyncComponent({
    loader: () => import('@/components/icons/TailwindIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const php = defineAsyncComponent({
    loader: () => import('@/components/icons/PhpIcon.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const laravel = defineAsyncComponent({
    loader: () => import('@/components/icons/Laravel.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const sql = defineAsyncComponent({
    loader: () => import('@/components/icons/Sql.vue'),
    loadingComponent: SkillsSvgSkeleton
})

export const StatusBar = defineAsyncComponent({
    loader: () => import('@/components/StatusBar.vue')
})

export const ProjectCard = defineAsyncComponent({
    loader: () => import('@/components/ProjectCard.vue'),
    loadingComponent: ProjectCardSkeleton
})

export const CodeBlock = defineAsyncComponent({
    loader: () => import('@/components/CodeBlock.vue'),
    loadingComponent: CodeBlockSkeleton
})