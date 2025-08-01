<template>
    <div class="vp-raw pt-30">
        <fwb-jumbotron header-text="专注出海工具推荐" sub-text="出海第一站，从这里开始">
            <div class="title-bg -z-1"></div>
            <div class="flex flex-row justify-center">
                <fwb-button :href="theme.nav[1].items[0].link" tag="a" size="xl" gradient="cyan-blue" shadow="cyan"
                    pill>
                    开始出发
                    <template #suffix>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                fill-rule="evenodd" />
                        </svg>
                    </template>
                </fwb-button>
            </div>
        </fwb-jumbotron>
    </div>
</template>

<script setup lang="ts">
import { FwbJumbotron } from './index'
import { FwbButton } from 'flowbite-vue'
import { useData } from 'vitepress'

const { theme } = useData()
</script>