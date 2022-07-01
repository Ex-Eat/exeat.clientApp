<script>
import AppH4 from "../ui/typo/AppH4.vue";
import AppDivider from "@/components/ui/AppDivider.vue";
import PinkButton from "@/components/ui/buttons/PinkButton.vue";
import {useUserStore} from "@/stores/user.store";
import {storeToRefs} from "pinia";
import {useCartStore} from "@/stores/cart.store";

export default {
    name: "MenuCard",
    components: {PinkButton, AppDivider, AppH4},
    props: {
        menu: {
            type: Object,
            required: true
        },
        restaurant: {
            type: Object,
            required: true
        }
    },
    setup() {
        const userStore = useUserStore();
        const cartStore = useCartStore();
        const {cart} = cartStore;
        const {user} = storeToRefs(userStore);

        return {
            user,
            cart,
            cartStore
        }
    },
    methods: {
        addToCart() {
            this.cartStore.addToCart(this.restaurant, this.menu, 'menu')
        }
    }
}
</script>

<template>
    <div class="shadow-md rounded">
        <div class="p-2">
            <AppH4>{{ menu.name }}</AppH4>
            <AppDivider />
            <div>
                <p>Articles ({{ menu.articles.length }}) :</p>
                <ul class="px-5 text-gray-500 text-sm">
                    <li v-for="article in menu.articles" :key="article._id" class="list-disc">{{ article.name }}</li>
                </ul>
            </div>
            <div class="flex flex-row justify-end items-center mt-2 space-x-4">
                <p class="text-gray-400 text-lg">{{ menu.price }}€</p>
                <PinkButton :disabled="!user || cartStore.isInCart(restaurant._id, menu._id)" @click="addToCart()">Ajouter au panier</PinkButton>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>