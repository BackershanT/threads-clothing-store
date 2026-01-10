import { create } from "zustand";

type CartItem = {
  variantId: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clear: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  add: (item) =>
    set((state) => {
      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(i => i.variantId === item.variantId);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        const newQuantity = Math.min(updatedItems[existingItemIndex].quantity + item.quantity, 3);
        updatedItems[existingItemIndex].quantity = newQuantity;
        return { items: updatedItems };
      }
      
      // Ensure quantity doesn't exceed 3 when adding new item
      const newItem = { ...item, quantity: Math.min(item.quantity, 3) };
      
      // Add new item
      return { items: [...state.items, newItem] };
    }),
  remove: (variantId) =>
    set((state) => ({
      items: state.items.filter((i) => i.variantId !== variantId),
    })),
  updateQuantity: (variantId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.variantId === variantId ? { ...item, quantity } : item
      ),
    })),
  clear: () => set({ items: [] }),
  getTotalItems: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },
  getTotalPrice: () => {
    const state = get();
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
}));