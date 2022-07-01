<script>
export default {
    name: "CloseIcon",
    props: {
        classNames: String,
        height: {
            type: Number,
            default: 48
        },
        width: {
            type: Number,
            default: 48
        }
    }
}
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :height="height" :width="width" viewBox="0 0 48 48" :class="classNames"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
</template>

<style scoped>

</style>