<script>
import AppH4 from "../ui/typo/AppH4.vue";
import CartQuantityHandler from "@/components/cart/CartQuantityHandler.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import {useCartStore} from "@/stores/cart.store";

export default {
    name: "CartItem.vue",
    components: {CloseIcon, CartQuantityHandler, AppH4},
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="flex flex-row items-center justify-between rounded-md bg-gray-100 p-2 h-12">
        <div class="flex flex-row items-end">
            <p class="w-12 text-gray-500">{{ product.price * product.quantity }}€</p>
            <p class="text-base">{{ product.name }}</p>
        </div>
        <div class="flex flex-row space-x-2">
            <button @click="cartStore.removeProduct(product._id)"
                    class="flex justify-center items-center rounded-full h-8 w-8 bg-gray-200 hover:brightness-95 focus:brightness-90">
                <CloseIcon :height="24" :width="24" />
            </button>
            <CartQuantityHandler :productId="product._id" :quantity="product.quantity" />
        </div>
    </div>
</template>

<style scoped>

</style>