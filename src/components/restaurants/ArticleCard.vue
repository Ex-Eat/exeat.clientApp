<script>
import AppH4 from "../ui/typo/AppH4.vue";
import AppDivider from "../ui/AppDivider.vue";
import PinkButton from "../ui/buttons/PinkButton.vue";
import {useUserStore} from "@/stores/user.store";
import {storeToRefs} from "pinia";
import {useCartStore} from "@/stores/cart.store";

export default {
    name: "ArticleCard.vue",
    components: { AppH4, AppDivider, PinkButton },
    props: {
        article: {
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
            this.cartStore.addToCart(this.restaurant, this.article, 'article')
        }
    }
}
</script>

<template>
    <div class="shadow-md rounded">
        <div class="p-2">
            <AppH4>{{ article.name }}</AppH4>
            <AppDivider />
            <div class="flex flex-row justify-end items-center mt-2 space-x-4">
                <p class="text-gray-400 text-lg">{{ article.price }}€</p>
                <PinkButton :disabled="!user || cartStore.isInCart(restaurant._id, article._id)" @click="addToCart">Ajouter au panier</PinkButton>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>