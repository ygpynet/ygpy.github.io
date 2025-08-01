<template>
    <div class="vp-raw flex-1">
        <fwb-card :href="href" :target="target">
            <div class="p-5 flex flex-col gap-2">
                <div class="flex flex-row gap-2 items-center">
                    <fwb-avatar bordered size="sm" :alt="title" :img="img" />
                    <h5 class=" text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">
                        {{ title }}
                    </h5>
                </div>
                <p class="font-normal text-gray-700 dark:text-gray-400 truncate" :title="text">
                    {{ text }}
                </p>
            </div>
        </fwb-card>
    </div>
</template>

<script lang="ts" setup>
import {
    FwbCard,
    FwbAvatar
} from './index'

defineProps<{
    href: string
    target: string
    img: string
    title: string
    text: string
}>()
</script>