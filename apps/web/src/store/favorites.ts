import { create } from "zustand";

type FavoriteItem = {
  productId: string;
  name: string;
  price: number;
  image: string;
};

type FavoritesStore = {
  items: FavoriteItem[];
  add: (item: FavoriteItem) => void;
  remove: (productId: string) => void;
  toggle: (item: FavoriteItem) => void;
  isFavorite: (productId: string) => boolean;
  clear: () => void;
  getTotalItems: () => number;
};

export const useFavorites = create<FavoritesStore>((set, get) => ({
  items: [],
  add: (item) =>
    set((state) => {
      // Check if item already exists in favorites
      const existingItemIndex = state.items.findIndex(i => i.productId === item.productId);
      
      if (existingItemIndex >= 0) {
        // Item already exists, don't add again
        return { items: state.items };
      }
      
      // Add new item
      return { items: [...state.items, item] };
    }),
  remove: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId),
    })),
  toggle: (item) => {
    const state = get();
    const isFavorite = state.isFavorite(item.productId);
    if (isFavorite) {
      state.remove(item.productId);
    } else {
      state.add(item);
    }
  },
  isFavorite: (productId) => {
    const state = get();
    return state.items.some(item => item.productId === productId);
  },
  clear: () => set({ items: [] }),
  getTotalItems: () => {
    const state = get();
    return state.items.length;
  },
}));