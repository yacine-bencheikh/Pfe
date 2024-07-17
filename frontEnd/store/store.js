import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ZIGN } from '@env';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

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
    userData: {},
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
            const user = await axios.get(`http://10.0.2.2:3100/api/users/getOne`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            set({ userData: user.data });
            console.log(token, '\n', id, '/n', user.data);
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
    updateAgent: async (id, updatedData, token) => {
        try {
            const response = await axios.patch(`http://10.0.2.2:3100/api/users/update/${id}`, updatedData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            set(state => ({
                agents: state.agents.map(agent =>
                    agent.id === id ? { ...agent, ...response.data } : agent
                )
            }));
        } catch (error) {
            console.log("can't update agent \n", error);
        }
    }
}));
export const useReservationStore = create((set) => ({
    profileType: "",
    reservation: {},
    setProfileType: (type) => set({ profileType: type }),
    setReservation: (res) => set({ reservation: res }),
    annulerReservation: async (reservation, navigation, token) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const response = await axios.patch("http://10.0.2.2:3100/api/reservations/cancelRes", reservation, config);
            navigation.navigate("HomeScreen");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

}))






export const useApiStore = create((set) => ({
    session_id: '',
    credentiel: null,
    setCredentiel: (credentiel) => set({ credentiel: credentiel }),
    provider_folder_id: '',
    documentsPath: [],
    pickedDocumentPath: [],
    addItem: (array) => {
        set({ documentsPath: array });
    },
    addPickedItem: (item) => {
        set(state => ({ pickedDocumentPath: [...state.pickedDocumentPath, item] }));
    },
    emptyPickedItems: () => {
        set({ pickedDocumentPath: [] });
    },

    createSession: async () => {
        const Step1Url = 'https://test.zignsec.com/v3/eid/scanningsessions';
        const body = {
            "locale": "en",
            "analysis_types": ["selfie", "document"]
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${ZIGN}` // Assuming ZIGN is a variable that holds your token
        };
        try {
            const response = await axios.post(Step1Url, body, { headers });
            set({ session_id: response.data.session_id });
            set({ provider_folder_id: response.data.provider_folder_id });
            return response.data.session_id
        } catch (error) {
            console.error(error);
        }
    },

    addDocs: async (session_id, credentiel, pickedDocumentPath, provider_folder_id) => {

        // console.log("document type  ", documentType);
        const reference = provider_folder_id;
        const Step2Url = `https://test.zignsec.com/v3/eid/scanningsessions/${session_id}/documents?documentType=${credentiel}&reference=${reference}`;

        const headers = {
            'Authorization': `${ZIGN}`,
            'Content-Type': `multipart/form-data`,
        };

        for (let index = 0; index < pickedDocumentPath.length; index++) {
            const fileUri = pickedDocumentPath[index];
            const fileInfo = await FileSystem.getInfoAsync(fileUri);
            if (!fileInfo.exists) {
                console.error("File doesn't exist");
                continue;
            }
            const formData = new FormData();
            formData.append('document', {
                uri: fileUri,
                type: 'image/jpeg', // or whichever type your file is
                name: `Frontal_face_${index}.jpg`, // Unique name for each file
            });
            try {
                const response = await axios.post(Step2Url, formData, { headers });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    },
    addSelfies: async (session_id, documentsPath, provider_folder_id) => {
        const reference = provider_folder_id;
        const Step2Url = `https://test.zignsec.com/v3/eid/scanningsessions/${session_id}/documents?documentType=Selfie&reference=${reference}`;
        const headers = {
            'Authorization': `${ZIGN}`,
            'Content-Type': `multipart/form-data`,
        };
        for (let index = 0; index < documentsPath.length; index++) {
            const fileUri = documentsPath[index].uri;
            console.log("haw cv");
            const fileInfo = await FileSystem.getInfoAsync(fileUri);
            if (!fileInfo.exists) {
                console.error("File doesn't exist");
                continue;
            }
            const formData = new FormData();
            formData.append('document', {
                uri: fileUri,
                type: 'image/jpeg', // or whichever type your file is
                name: `Frontal_face_${index}.jpg`, // Unique name for each file
            });
            try {
                const response = await axios.post(Step2Url, formData, { headers });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    },
    startAnalysis: async (session_id) => {
        const rawTimeZoneOffset = new Date().getTimezoneOffset();
        const timeZoneOffset = -rawTimeZoneOffset;
        console.log("timeZoneOffset", timeZoneOffset);
        const url = `https://test.zignsec.com/v3/eid/scanningsessions/${session_id}/analyses?timeZoneOffset=${timeZoneOffset}`;

        const headers = {
            'Authorization': `${ZIGN}`,
        };

        const data = {
            "analysis_types": ["selfie", "document"]
        };

        try {
            const response = await axios.post(url, data, { headers });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    },

    getAnalysesResult: async (session_id) => {
        const url = `https://test.zignsec.com/v3/eid/scanningsessions/${session_id}/analyses`;

        const headers = {
            'Authorization': `${ZIGN}`,
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    kycProcess: async (createSession, addDocs, addSelfies, startAnalysis, getAnalysesResult, provider_folder_id, credentiel, pickedDocumentPath, documentsPath) => {
        try {
            const session_id = await createSession()
            await addDocs(session_id, credentiel, pickedDocumentPath, provider_folder_id)

            await addSelfies(session_id, documentsPath, provider_folder_id)

            await startAnalysis(session_id)

            const resp4 = await getAnalysesResult(session_id)
            console.log("anal_summ", resp4.analysis_summary.id_document_summary.fields.Document_Number);
            
            return resp4.total_result

        }

        catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');

        }
    }


}));


