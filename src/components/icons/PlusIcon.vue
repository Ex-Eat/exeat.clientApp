<script>
export default {
    name: "PlusIcon",
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
    <svg xmlns="http://www.w3.org/2000/svg" :height="height" :width="width" viewBox="0 0 48 48" :class="classNames"><path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z"/></svg>
</template>

<style scoped>

</style>