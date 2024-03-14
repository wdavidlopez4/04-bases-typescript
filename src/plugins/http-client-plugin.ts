import axios from 'axios';


export const httpClient = {

    get: async(url: string) => {
        const { data } = await axios.get(url);
        return data;
    },

    post: async(url: string, body: any) => {},

    put: async(url: string, body : any) => {},

    delete: async(url: string, body: any) => {}

}