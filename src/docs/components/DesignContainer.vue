<template>
    <h2>颜色</h2>
    <div class="item-container">
        <Item title="UiColors" desc="Press spacebar, enter a hexcode or change the HSL values to create a custom color scale"
            link="https://uicolors.app/create">
        </Item>
    </div>
    <h2>创造</h2>
    <div class="item-container">
        <Item title="Peeps" desc="Peeps Avatar Builder by UI8.net"
            link="https://peeps.ui8.net/">
        </Item>
    </div>
    <h2>Web灵感</h2>
    <div class="item-container">
        <Item title="Curated" desc="Unleash your creativity with out-of-this-world web design inspiration from across the web"
            link="https://www.curated.design/">
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