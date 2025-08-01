<template>
    <div class="vp-raw">
        <fwb-img :alt="alt" :caption="alt" :src="src" />
    </div>
</template>

<script lang="ts" setup>
import { FwbImg } from './index'

defineProps<{
    alt: string
    src?: string
}>()
</script>