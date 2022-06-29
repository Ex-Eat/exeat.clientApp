<script>
export default {
    name: "MinusIcon",
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
    <svg xmlns="http://www.w3.org/2000/svg" :height="height" :width="width" viewBox="0 0 48 48" :class="classNames"><path d="M10 25.5v-3h28v3Z"/></svg>
</template>

<style scoped>

</style>