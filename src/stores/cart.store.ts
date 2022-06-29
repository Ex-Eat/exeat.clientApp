import { defineStore } from 'pinia';
import instance from '@/api/axios';
import routes from '@/api/routes';
import type IMenuDto from "@/dto/IMenuDto";
import type IArticleDto from "@/dto/IArticleDto";
import type IRestaurantDto from "@/dto/IRestaurantDto";
import type {ICartDto} from "@/dto/ICartDto";

export const useCartStore = defineStore({
    id: 'cart',
    state: (): { cart: ICartDto, isOpened: boolean } => ({
        cart: JSON.parse(localStorage.getItem('exeat-cart') || '{}') || null,
        isOpened: false
    }),
    getters: {},
    actions: {
        toggleOpen(newState: boolean) {
            this.isOpened = newState;
        },
        addToCart(restaurant: IRestaurantDto, item: IMenuDto | IArticleDto, type: 'menu' | 'article') {
            if (this.cart.restaurantId !== restaurant._id) {
                this.cart = {
                    restaurantId: restaurant._id,
                    restaurantName: restaurant.name,
                    products: [{
                        _id: item._id,
                        name: item.name,
                        price: item.price,
                        quantity: 1,
                        type
                    }],
                    price: item.price
                }
            } else {
                this.cart.products.push({
                    _id: item._id,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    type
                })
                this.cart.price += item.price;
            }
            localStorage.setItem('exeat-cart', JSON.stringify(this.cart));
        },
        isInCart(restaurantId: string, productId: string) {
            return this.cart.restaurantId === restaurantId && this.cart.products.some(p => p._id === productId);
        },
        modifyQuantity(itemId: string, newQuantity: number) {
            const item = this.cart.products.find(p => p._id === itemId);
            if (!item) return;
            item.quantity = newQuantity
            this.cart.price = this.cart.products.reduce((acc, val) => acc + (+val.price * val.quantity), 0);
            localStorage.setItem('exeat-cart', JSON.stringify(this.cart));
        },
        removeProduct(itemId: string) {
            this.cart.products = this.cart.products.filter(p => p._id !== itemId);
            this.cart.price = this.cart.products.reduce((acc, val) => acc + (+val.price * val.quantity), 0);
            localStorage.setItem('exeat-cart', JSON.stringify(this.cart));
        },
        clearCart() {
            this.cart = {}
            localStorage.removeItem('exeat-cart')
        }
    },
});
