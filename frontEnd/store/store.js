import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('@storage_Key', token)
    } catch (e) {
        console.log("can't store token \n", e);
    }
}

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
            return value;
        }
    } catch(e) {
        console.log("can't get token \n", e);
    }
    return "";
}

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

export const useAuthStore = create((set) => ({
    user: {},
    isAuth: false,
    token: getToken(),
    setToken: (token) => set({ token: token }),
    setAuth: async (email, password) => {
        try {
            const response = await axios.post("http://10.0.2.2:3100/api/users/login", {
                email: email,
                password: password
            });
            const token = response.data.token;
            storeToken(token);
            set({ isAuth: !!token, token: token, user: response.data.userId });
        } catch (error) {
            console.log("can't set auth \n", error);
        }
    }
}));