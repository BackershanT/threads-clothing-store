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
        updatedItems[existingItemIndex].quantity += item.quantity;
        return { items: updatedItems };
      }
      
      // Add new item
      return { items: [...state.items, item] };
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