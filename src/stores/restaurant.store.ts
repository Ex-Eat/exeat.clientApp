import { defineStore } from 'pinia';
import instance from '@/api/axios';
import routes from '@/api/routes';

export const useRestaurantStore = defineStore({
    id: 'restaurant',
    state: () => ({
        restaurants: [],
        search: ''
    }),
    getters: {},
    actions: {
        async getRestaurants() {
            try {
                const response = await instance.get(routes.ALL_RESTAURANTS);
                this.restaurants = response.data;
            } catch (e) {
                return e
            }
        }
    },
});
