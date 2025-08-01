---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Awesome Project"
  text: "A VitePress Site"
  tagline: My great project tagline
#   actions:
#     - theme: brand
#       text: Markdown Examples
#       link: /markdown-examples
#     - theme: alt
#       text: API Examples
#       link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <Card
    href="/vpn/2025/07"
    img="/images/vpn.png"
    title="机场推荐"
    text="推荐试用机场，解决上网难题。"
  />
  <Card
    href="/app/"
    img="/images/app.png"
    title="软件列表"
    text="罗列常用软件，提升作业效率。"
  />
  <Card
    href="/nav/"
    img="/images/nav.png"
    title="网址导航"
    text="导航热门网站，扩展业务视野。"
  />
</div>

<p></p>
<CardHorizontal />

## 使用指南

<Timeline />

## 常见问题

<Accordion />