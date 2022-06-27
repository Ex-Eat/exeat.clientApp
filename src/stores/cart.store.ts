import { defineStore } from 'pinia';
import instance from '@/api/axios';
import routes from '@/api/routes';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: [],
        isOpened: true
    }),
    getters: {},
    actions: {
        toggleOpen(newState: boolean) {
            console.log(newState);
            this.isOpened = newState;
        }
    },
});
