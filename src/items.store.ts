import create from "zustand";

interface UseItemsProps {
  items: number[];
  pushToItems(item: number): void;
  removeLastItem(): void;
}

const INITIAL_STATE = {
  items: [1],
};

export const useItems = create<UseItemsProps>((set) => ({
  items: [1],
  pushToItems: (item: number) =>
    set((state) => ({ items: [...state.items, item] })),
  removeLastItem: () => set((state) => ({ items: state.items.slice(0, -1) })),
}));
