// https://vitepress.dev/guide/custom-theme
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import Layout from './Layout.vue'
import Accordion from './components/Accordion.vue'
import Ads from './components/Ads.vue'
import Card from './components/Card.vue'
import CardHorizontal from './components/CardHorizontal.vue'
import Carousel from './components/Carousel.vue'
import Img from './components/Img.vue'
import Jumbotron from './components/Jumbotron.vue'
import Link from './components/Link.vue'
import Timeline from './components/Timeline.vue'
import Tooltip from './components/Tooltip.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    // Medium Zoom
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }
    // Clipboard
    const cp = () => {
      document.querySelectorAll('code').forEach(code => {
        code.addEventListener('click', async () => {
          navigator.clipboard.writeText(code.textContent);
        });
      });
    }
    onMounted(() => {
      initZoom()
      cp()
    })
    watch(
      () => route.path,
      () => nextTick(() => {
        initZoom()
        cp()
      })
    )
  },
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Accordion', Accordion)
    app.component('Ads', Ads)
    app.component('Card', Card)
    app.component('CardHorizontal', CardHorizontal)
    app.component('Carousel', Carousel)
    app.component('Img', Img)
    app.component('Jumbotron', Jumbotron)
    app.component('Link', Link)
    app.component('Timeline', Timeline)
    app.component('Tooltip', Tooltip)
  }
}