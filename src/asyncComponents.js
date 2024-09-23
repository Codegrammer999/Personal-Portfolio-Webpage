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