<template>
    <h2>开发关注</h2>
    <div class="item-container">
        <Item title="maximeheckel" desc="🇫🇷 in 🇺🇸 • Frontend • Three.js, Shaders, React, Next.js • Writing on http://blog.maximeheckel.com 🧑‍💻"
            link="https://maximeheckel.com/">
        </Item>
        <Item title="harshsingh" desc="Software consultant, building tools and polished user interactions. DM for project inquiries."
            link="https://harshsingh.xyz/">
        </Item>
        <Item title="ibelick" desc="Crafting UIs with React since 2016. Passionate about interface design and attention to detail, striving to create great experiences."
            link="https://ibelick.com/">
        </Item>
        <Item title="jacksonoswalt" desc="At 12 years old, I built a nuclear fusion reactor."
            link="https://jacksonoswalt.com/">
        </Item>
        <Item title="vaunb" desc="I'm Vaun and here I document what I'm currently working on and what excites me."
            link="https://vaunb.lu/">
        </Item>
    </div>
</template>

<script setup>
import Item from "./Item.vue"
</script>

<style scoped>
.item-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
</style>