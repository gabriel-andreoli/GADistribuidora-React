import axios from 'axios';

export class RestService {
    public static GET = async (url: string, params = {}) => {
    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        throw error; 
    }
    };

    public static POST = async (url: string, data = {}) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
    };
}
