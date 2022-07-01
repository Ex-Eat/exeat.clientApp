import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import LogoutView from '../views/LogoutView.vue';
import SignupView from '../views/SignupView.vue';
import AccountView from '../views/AccountView.vue';
import NewOrderView from '../views/NewOrderView.vue';
import RestaurantView from "@/views/restaurant/RestaurantListView.vue";
import RestaurantDetails from "@/views/restaurant/RestaurantListDetails.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/restaurant',
			name: 'restaurantsList',
			component: RestaurantView,
		},
		{
			path: '/restaurant/:id',
			name: 'restaurantDetail',
			component: RestaurantDetails,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignupView,
		},
		{
			path: '/logout',
			name: 'logout',
			component: LogoutView,
		},
		{
			path: '/order/new',
			name: 'new_order',
			component: NewOrderView,
		},
		{
			path: '/account',
			name: 'account',
			component: AccountView,
		},
	],
});

export default router;
