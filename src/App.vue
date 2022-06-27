<script lang="ts">
import NavBar from '@/components/ui/NavBar.vue';
import CartContainer from "@/components/cart/CartContainer.vue";

export default {
    components: {CartContainer, NavBar},
};
</script>

<template>
    <NavBar />

    <main class="relative w-[100vw] overflow-hidden">
        <RouterView />
    </main>
</template>

<style>
    main {
        min-height: calc(100vh - 90px);
    }
</style>
