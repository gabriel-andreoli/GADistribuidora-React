import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export class RestService<T> {
    public async GET (url: string, params = {}) {
    try {
        const response : AxiosResponse<ApiResponse<T>> = await axios.get<ApiResponse<T>>(url, { params });
        await this.HandleResponse(response);
        return response.data;
    } catch (error) {
        await this.HandleException();
    }
    };

    public async POST (url: string, data = {}){
    try {
        const response = await axios.post(url, data);
        await this.HandleResponse(response);
        return response.data;
    } catch (error) {
        await this.HandleException();
    }
    };

    private async HandleResponse<T>(response: AxiosResponse<ApiResponse<T>>): Promise<void>{
        var dataResult = response.data;
        if(!dataResult.success){
            dataResult.errors.forEach((erro) => {
                toast.error(erro);
            });
        }
    }

    private async HandleException() : Promise<void>{
        toast.error('Ops, entre em contato com o suporte');
    }
}

interface ApiResponse<T>{
    success: boolean,
    data: T,
    errors: string[]
}