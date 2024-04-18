// stores/cart.ts

import { defineStore } from 'pinia';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
    }),
    getters: {
        totalItems(): number {
            return this.items.reduce((total, item) => total + item.quantity, 0);
        },
        totalPrice(): number {
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
    actions: {
        addItem(item: CartItem) {
            const existingItem = this.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                this.items.push(item);
            }
        },
        removeItem(itemId: number) {
            this.items = this.items.filter((item) => item.id !== itemId);
        },
        clearCart() {
            this.items = [];
        },
        updateItemQuantity(itemId: number, quantity: number) {
            const item = this.items.find((i) => i.id === itemId);
            if (item) {
                item.quantity = quantity;
            }
            if (item?.quantity == 0) {
                this.removeItem(itemId);
            }
        },
    },
});