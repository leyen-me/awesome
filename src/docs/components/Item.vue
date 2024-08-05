<template>
    <div class="libs-item" @click="handleClick">
        <div class="libs-item-title" style="font-size: 18px;font-weight: 600;">
            {{ title }}
        </div>
        <div class="libs-item-desc">{{ desc }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
})

const handleClick = ()=>{
    window.open(props.link)
}
</script>

<style scoped>
.libs-item {
    width: calc((100% / 2) - 20px);
    padding: 16px;
    height: 108px;
    background-color:  var(--vp-c-bg-soft);
    border-radius: 8px;
    border: 1px solid var(--vp-c-bg-soft);
    transition: border-color 0.25s, background-color 0.25s;
    cursor: pointer;
}
.libs-item:hover {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-bg-alt);
}

.libs-item-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.libs-item-desc {
    margin-top: 6px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.libs-item-title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
}
.libs-item-desc {
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}
</style>