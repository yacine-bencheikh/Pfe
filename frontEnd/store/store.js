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
const storeId = async (id) => {
    try {
        await AsyncStorage.setItem('@storage_Id', id.toString())
    } catch (e) {
        console.log("can't store id \n", e);
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
const getId = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Id')
        if (value !== null) {
            return Number(value);
        }
    }
    catch (e) {
        console.log("can't get id \n", e);
    }
    return 0;
}

export const useAuthStore = create((set) => ({
    user: getId(),
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
            const id = response.data.userId;
            storeId(id);
            set({ token: token, user: response.data.userId });
            console.log(token, '\n',id);
        } catch (error) {
            console.log("can't set auth \n", error);
        }
    },
    logOut: async (navigation) => {
        try {
            await AsyncStorage.removeItem('@storage_Key');
            await AsyncStorage.removeItem('@storage_Id');
            set({ token: "", user: 0 });
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
            // console.log(token);
            const response = await axios.get("http://10.0.2.2:3100/api/users/getCrew", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            set({ agents: response.data });
        } catch (error) {
            console.log("can't set agents \n", error);
        }
    },
    deleteAgent: async (id, token) => {
        try {
            console.log(id, token);
            await axios.delete(`http://10.0.2.2:3100/api/users/destroy/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            set(state => ({ agents: state.agents.filter(agent => agent.id !== id) }));
        } catch (error) {
            console.log("can't delete agent \n", error);
        }
    },
    updateAgent: async (id, updatedData,token) => {
        try {
            const response = await axios.patch(`http://10.0.2.2:3100/api/users/update/${id}`, updatedData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            set(state => ({
                agents: state.agents.map(agent => 
                    agent.id === id ? {...agent, ...response.data} : agent
                )
            }));
        } catch (error) {
            console.log("can't update agent \n", error);
        }
    }
}));
export const useReservationStore = create((set)=>({
    profileType: "",
    reservation: {},
    setProfileType: (type) => set({profileType: type}),
    setReservation: (res) => set({reservation: res}),

}))