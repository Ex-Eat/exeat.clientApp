<script>
import MinusIcon from "@/components/icons/MinusIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import {useCartStore} from "@/stores/cart.store";

export default {
    name: "CartQuantityHandler",
    components: {PlusIcon, MinusIcon},
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore
        }
    },
    props: {
        productId: String,
        quantity: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>
    <div class="flex flex-row items-center h-8 rounded-full bg-primary-700">
        <button @click="cartStore.modifyQuantity(productId, quantity - 1)"
                :disabled="quantity === 1"
                class="flex justify-center items-center h-8 w-8 rounded-tl-full rounded-bl-full bg-primary-700 hover:brightness-90 disabled:bg-primary-500 transition">
            <MinusIcon classNames="fill-white" :height="24" :width="24" />
        </button>
        <div class="h-6 w-8 text-white text-center bg-primary-700 border-primary-300 border-l border-r">{{ quantity }}</div>
        <button @click="cartStore.modifyQuantity(productId, quantity + 1)" class="flex justify-center items-center h-8 w-8 rounded-tr-full rounded-br-full bg-primary-700 hover:brightness-90 transition">
            <PlusIcon classNames="fill-white" :height="24" :width="24" />
        </button>
    </div>
</template>

<style scoped>

</style>