export class ApiRoutes{
    static BASE_URL: string = "https://localhost:7155";

    static V1: string = "/api/v1"

    static LOGIN: string = `${this.BASE_URL}${this.V1}/authenticate/Login`
    static CREATE_ACCOUNT: string = `${this.BASE_URL}${this.V1}/authenticate/CreateUser`
}