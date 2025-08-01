<template>
    <div class="vp-raw">
        <a :href="theme.ads.home.href" class="flex flex-1" target="_blank">
            <fwb-card :img-alt="theme.ads.home.alt" :img-src="theme.ads.home.src" variant="horizontal" class="w-lg">
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ theme.ads.home.title }}
                    </h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        {{ theme.ads.home.text }}
                    </p>
                </div>
            </fwb-card>
        </a>
    </div>
</template>

<script setup lang="ts">
import { FwbCard } from './index'
import { useData } from 'vitepress'

const { theme } = useData()
</script>