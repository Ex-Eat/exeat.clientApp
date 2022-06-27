<script>
export default {
    name: "AppH2"
}
</script>

<template>
    <h2 class="text-2xl mb-2">
        <slot />
    </h2>
</template>

<style scoped>
    h2 {
        color: rgba(0, 0, 0, 0.87);
    }
</style>