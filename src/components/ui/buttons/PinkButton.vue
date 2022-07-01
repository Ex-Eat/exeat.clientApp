<script>
    export default {
        name: 'PinkButton',
        props: {
            disabled: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<template>
    <button
        :class="{ '!bg-gray-300': disabled }"
        class="h-10 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full hover:brightness-90 transition bg-primary-700"
        :disabled="disabled">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-full">
            <slot />
        </span>
    </button>
</template>

<style scoped>
    .bg-gray-300 {

    }
</style>