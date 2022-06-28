import { defineStore } from 'pinia';
import instance from '@/api/axios';
import routes from '@/api/routes';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: [],
        isOpened: false
    }),
    getters: {},
    actions: {
        toggleOpen(newState: boolean) {
            this.isOpened = newState;
        }
    },
});
