<template>
    <div class="vp-raw">
        <fwb-carousel no-controls :pictures="pictures" slide :slide-interval="4000" />
    </div>
</template>

<script setup>
import { FwbCarousel } from './index'

const pictures = [
    { src: 'https://ygpy.net/images/sponsor/hongxing/20240801.webp', alt: 'Image 1', link: 'https://flowbite.com' },
    { src: 'https://flowbite.com/docs/images/carousel/carousel-2.svg', alt: 'Image 2', link: 'https://jd.com' },
    { src: 'https://flowbite.com/docs/images/carousel/carousel-3.svg', alt: 'Image 3', link: 'https://baidu.com' }
]
</script>