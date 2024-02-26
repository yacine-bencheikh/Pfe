import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('@storage_Key', token)
        // adeddd  
    } catch (e) {
        console.log("can't store token \n", e);
    }
}


const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            return value;
        }
    } catch (e) {
        console.log("can't get token \n", e);
    }
    return "";
}


export const useAuthStore = create((set) => ({
    user: 0,
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
            set({ token: token, user: response.data.userId });
        } catch (error) {
            console.log("can't set auth \n", error);
        }
    },
    logOut: async (navigation) => {
        try {
            await AsyncStorage.removeItem('@storage_Key');
            set({ token: "", user: {} });
            navigation.navigate('Login')
        } catch (error) {
            console.log("can't log out \n", error);
        }
    }

}));

export const useAgentStore = create((set) => ({
    agents: [],
    currentAgent: {},
    setCurrentAgent: (agent) => set({ currentAgent: agent }),
    setAgents: async (token) => {
        try {
            const response = await axios.get("http://10.0.2.2:3100/api/users/getCrew", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            set({ agents: response.data });
        } catch (error) {
            console.log("can't set agents \n", error);
        }
    }
}));