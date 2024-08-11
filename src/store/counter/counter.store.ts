import { create } from 'zustand'

interface CounterState {
  count: number;
  isReady: boolean;

  increase: (by: number) => void;
  initCountState: (value: number) => void;

  resetCount: () => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
  count: 5,
  isReady: false,

  increase: (by: number) => set((state) => ({ count: state.count + by })),

  initCountState: (value: number) =>
    set((state) => ({
      count: state.isReady ? state.count : value,
      isReady: state.isReady ? state.isReady : true,
    })),

  resetCount: () => set({ count: 0 }),
}))