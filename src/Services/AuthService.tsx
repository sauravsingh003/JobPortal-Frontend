import axiosInstance from "../Interceptor/AxiosInterceptor";

const loginUser = async (login: any) => {
    try {
        const result = await axiosInstance.post(`/auth/login`, login);
        return result.data;
    } catch (error: any) {
        console.error("Login error:", error.response || error.message);
        throw error;
    }
};

export { loginUser };
