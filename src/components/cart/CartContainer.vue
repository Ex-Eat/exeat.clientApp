<script>
import {useCartStore} from "@/stores/cart.store";
import AppDivider from "@/components/ui/AppDivider.vue";
import {storeToRefs} from "pinia";
import AppH2 from "@/components/ui/typo/AppH2.vue";

export default {
    name: "CartContainer",
    components: {AppH2, AppDivider},
    setup() {
        const cartStore = useCartStore();
        const {cart, isOpened} = storeToRefs(cartStore)

        return {
            cart,
            isOpened
        }
    }
}
</script>

<template>
    <div class="container absolute top-[90px] right-0 w-96 shadow-md" :class="{ closed: !isOpened, opened: isOpened }">
        <div class="flex flex-col p-2">
            <AppH2>Panier ({{ cart.length }})</AppH2>
            <AppDivider />
        </div>
    </div>
</template>

<style scoped>
    .container {
        height: calc(100vh - 90px);
        transition: right 0.3s;
    }

    .closed {
        right: -384px;
    }

    .opened {
        right: 0;
    }
</style>