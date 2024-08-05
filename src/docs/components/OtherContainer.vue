<template>
    <h2>工具</h2>
    <div class="item-container">
        <Item title="PDF-lookscanned" desc="Look Scanned is a pure front-end website that makes PDFs look like scanned documents. No more hassle of printing and scanning, all you need is a few mouse clicks."
            link="https://zh.lookscanned.io/scan">
        </Item>
        <Item title="QQTool" desc="Do us a favor, Tencent QQ browser online toolbox platform provides online services such as ID photo generation, emoticon package production, PDF conversion, text extraction, QR code generation, data verification, photo repair, plug-in installation, etc., so you have no worries Life. Do a little favor - all classification tools"
            link="https://tool.browser.qq.com">
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