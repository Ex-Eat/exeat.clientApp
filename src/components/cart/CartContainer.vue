<script>
import { useCartStore } from '@/stores/cart.store';
import AppDivider from '@/components/ui/AppDivider.vue';
import { storeToRefs } from 'pinia';
import AppH2 from '@/components/ui/typo/AppH2.vue';
import AppH4 from '@/components/ui/typo/AppH4.vue';
import CartItem from '@/components/cart/CartItem.vue';
import PinkButton from '@/components/ui/buttons/PinkButton.vue';
import WhiteButton from '@/components/ui/buttons/WhiteButton.vue';

export default {
	name: 'CartContainer',
	components: { WhiteButton, PinkButton, CartItem, AppH4, AppH2, AppDivider },
	setup() {
		const cartStore = useCartStore();
		const { cart, isOpened } = storeToRefs(cartStore);

		return {
			cart,
			isOpened,
		};
	},
};
</script>

<template>
	<div
		class="flex flex-col justify-between container absolute right-0 w-96 shadow-md z-10 bg-white"
		:class="{ closed: !isOpened, opened: isOpened }"
	>
		<div class="flex flex-col p-2">
			<AppH2>Mon panier ({{ cart.products?.length || 0 }})</AppH2>
			<p class="text-gray-500">Restaurant : {{ cart.restaurantName || '-' }}</p>
			<AppDivider />
			<div class="grid grid-cols-1 gap-4 mt-2">
				<CartItem v-for="product in cart.products" :key="product._id" :product="product" />
			</div>
		</div>
		<div class="sticky bottom-0 py-4 px-2">
			<div class="flex flex-row items-center justify-between mb-2">
				<p class="text-gray-500 text-xl">Total</p>
				<p class="text-gray-500 text-xl">{{ cart.price }}€</p>
			</div>
			<AppDivider />
			<div class="flex flex-row space-x-2 justify-end mt-4">
				<WhiteButton @click="cart.clearCart">Supprimer</WhiteButton>
				<RouterLink to="/order/new">
					<PinkButton>Commander</PinkButton>
				</RouterLink>
			</div>
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
