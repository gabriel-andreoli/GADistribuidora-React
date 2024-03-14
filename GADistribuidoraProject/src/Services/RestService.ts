import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export class RestService<T> {
    public async GET(url: string, params = {}) {
        let response: AxiosResponse<ApiResponse<T>>;
        try {
            response = await axios.get<ApiResponse<T>>(url, { params });
            return this.HandleResponse(response);
        } catch (error) {
            await this.HandleException();
        }
    };

    public async POST(url: string, data = {}) {
        let response: AxiosResponse<ApiResponse<T>>;
        try {
            response = await axios.post<ApiResponse<T>>(url, data);
            return this.HandleResponse(response);
        } catch (error) {
            await this.HandleException();
        }
    };

    private async HandleResponse<T>(response: AxiosResponse<ApiResponse<T>>): Promise<ApiResponse<T>> {
        const dataResult = response.data;
        if (!dataResult.success) {
            dataResult.errors.forEach((erro) => {
                toast.error(erro);
            });
        }
        return dataResult;
    }

    private async HandleException(response?: AxiosResponse<ApiResponse<T>>): Promise<void> {
        if (response) {
            toast.error('Ops, entre em contato com o suporte');
        } else {
            toast.error('Ops, ocorreu um erro de conexão.');
        }
    }
}

interface ApiResponse<T> {
    success: boolean;
    data: T;
    errors: string[];
}
