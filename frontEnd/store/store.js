import { create } from "zustand";
import axios from "axios";

export const useCountStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export const useDataStore = create((set) => ({
    data: [],
    setData: async () => {
        try {
            const response = await axios.get("http://10.0.2.2:3100/api/users/getAll");
            set({ data: response.data });
        } catch (error) {
            console.log("can't fetch data \n", error);
        }
    }
}));