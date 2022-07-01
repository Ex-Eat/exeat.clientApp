<script>
import PageTitle from '../components/ui/PageTitle.vue';
import PinkButton from '../components/ui/buttons/PinkButton.vue';
import AppDivider from '../components/ui/AppDivider.vue';
import AppH2 from '../components/ui/typo/AppH2.vue';
import CartItem from '../components/cart/CartItem.vue';
import AppTextarea from '../components/ui/forms/AppTextarea.vue';
import { useCartStore } from '@/stores/cart.store';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.store';
import instance from '@/api/axios';

export default {
	name: 'NewOrderView',
	components: { PageTitle, PinkButton, AppDivider, AppH2, CartItem, AppTextarea },
	data: () => ({
		clientComment: '',
	}),
	setup() {
		const cartStore = useCartStore();
		const userStore = useUserStore();
		const { cart } = storeToRefs(cartStore);
		const { client } = storeToRefs(userStore);

		return {
			cart,
			client,
		};
	},
	methods: {
		async launchOrder() {
			const order = {
				...this.cart,
				articles: this.cart.products.filter((p) => p.type === 'article') || [null],
				menus: this.cart.products.filter((p) => p.type === 'menu') || [null],
				restaurantPrice: this.cart.price,
				clientComment: this.clientComment,
				location: this.client.locations,
			};
			delete order.products;
			delete order.price;

			const response = await instance.post('order', order);
		},
	},
};
</script>

<template>
	<PageTitle>Nouvelle commande</PageTitle>

	<div v-if="cart.restaurantName || cart.products" class="my-10 px-[10vw]">
		<div class="grid grid-cols-2 gap-5">
			<div>
				<div class="flex flex-col p-2 mb-4">
					<AppH2>Mon panier ({{ cart.products?.length }})</AppH2>
					<p class="text-gray-500">Restaurant : {{ cart.restaurantName }}</p>
					<AppDivider />
					<div class="grid grid-cols-1 gap-4 mt-2">
						<CartItem v-for="product in cart.products" :key="product._id" :product="product" />
					</div>
				</div>
				<AppTextarea v-model:value="clientComment" label="Commentaire client" name="clientComment" />
			</div>
			<div>
				<AppH2>Résumé</AppH2>
				<div class="sticky bottom-0 py-1 px-2">
					<div class="flex flex-row items-center justify-between mb-2">
						<p class="text-md">Votre addresse</p>
						<p class="text-md">{{ client?.locations?.address }}</p>
					</div>
					<AppDivider />
					<div class="flex flex-row items-center justify-between mb-2">
						<p class="text-gray-500 text-md">Prix de la commande</p>
						<p class="text-gray-500 text-md">{{ cart.price }}€</p>
					</div>
					<div class="flex flex-row items-center justify-between mb-2">
						<p class="text-gray-500 text-md">Frais de livraison</p>
						<p class="text-gray-500 text-md">{{ cart.price / 10 }}€</p>
					</div>
					<div class="flex flex-row items-center justify-between mb-2">
						<p class="text-gray-500 text-md">Frais de fonctionnement de la plateforme</p>
						<p class="text-gray-500 text-md">{{ cart.price / 10 }}€</p>
					</div>
					<div class="flex flex-row items-center justify-between mb-2">
						<p class="text-gray-500 text-xl">Prix total</p>
						<p class="text-gray-500 text-xl">{{ Math.round(cart.price * 120) / 100 }}€</p>
					</div>
				</div>
			</div>
		</div>
		<AppDivider />
		<div class="flex flex-row space-x-2 justify-end mt-4">
			<PinkButton @click="launchOrder">Commander</PinkButton>
		</div>
	</div>
	<div v-else class="my-10 px-[10vw] italic">
		<AppH2>Vous n'avez rien dans votre panier pour le moment</AppH2>
	</div>
</template>

<style scoped></style>
