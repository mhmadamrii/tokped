import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface BearInterface {
  bears: number;
  increment: (by: number) => void;
}

const useBearStore = create<BearInterface>()((set) => ({
  bears: 0,
  increment: (by) =>
    set((state) => ({ bears: state.bears + 1 })),
}));

const useBearStoreSecond = create(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) =>
      set((state) => ({ bears: state.bears + by })),
  })),
);

export { useBearStore, useBearStoreSecond };
