import { defineStore } from 'pinia';
import instance from '@/api/axios';
import routes from '@/api/routes';

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		user: null,
		client: null
	}),
	getters: {},
	actions: {
		async loadUser() {
			try {
				const user = (await instance.get(routes.LOAD_CONNECTED_USER)).data;
				const client = (await instance.get(`${routes.GET_CLIENT_GLOBAL_ID}/${user.id}`)).data;

				this.user = user;
				this.client = client;
				return { message: 'User successfully loaded' };
			} catch (error) {
				return error;
			}
		},
		async login(email: string, password: string) {
			try {
				const response = await instance.post(routes.LOGIN, {
					email,
					password,
					app: 'client'
				});
				this.user = response.data;
				return { message: 'Successfully authenticated' };
			} catch (error) {
				return error;
			}
		},
		async signup(data: unknown) {
			try {
				const response = await instance.post(routes.SIGNUP, data);
				this.user = response.data;
				return { message: 'Successfully authenticated' };
			} catch (error) {
				return error;
			}
		},
		async logout() {
			try {
				await instance.get(routes.LOGOUT);
				this.user = null;
				return { message: 'Successfully disconnected' };
			} catch (error) {
				return error;
			}
		},
	},
});
