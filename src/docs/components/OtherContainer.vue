<template>
    <h2>AI</h2>
    <div class="item-container">
        <Item title="Claude" desc="Talk with Claude, an AI assistant from Anthropic" link="https://claude.ai/">
        </Item>
        <Item title="Chatgpt"
            desc="ChatGPT helps you get answers, find inspiration and be more productive. It is free to use and easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming and more."
            link="https://chatgpt.com/">
        </Item>
    </div>
    <h2>工具</h2>
    <div class="item-container">
        <Item title="PDF-lookscanned"
            desc="Look Scanned is a pure front-end website that makes PDFs look like scanned documents. No more hassle of printing and scanning, all you need is a few mouse clicks."
            link="https://zh.lookscanned.io/scan">
        </Item>
        <Item title="QQTool"
            desc="Do us a favor, Tencent QQ browser online toolbox platform provides online services such as ID photo generation, emoticon package production, PDF conversion, text extraction, QR code generation, data verification, photo repair, plug-in installation, etc., so you have no worries Life. Do a little favor - all classification tools"
            link="https://tool.browser.qq.com">
        </Item>
        <Item title="Snapany"
            desc="Universal Video Image Analyzer Download. Fast, free and easy. Save videos and images from 1000+ platforms"
            link="https://snapany.com/zh">
        </Item>
        <Item title="YoutubeSubtitles" desc="Get subtitles for any YouTube video using our subtitle downloader"
            link="https://www.downloadyoutubesubtitles.com/zh">
        </Item>
    </div>
    <h2>反编译</h2>
    <div class="item-container">
        <Item title="x86re"
            desc="Brief introduction to RE, executables, compiling, 32-bit x86 syntax, and stack frames."
            link="https://x86re.com">
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