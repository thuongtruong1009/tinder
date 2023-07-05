import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'auth';
const URL = `${API}/${ENDPOINT}`;

const authApi = {
    currentUser: () => {
        return axiosService.get(`${URL}/`);
    },
    registerWithPhone: (body: ILoginWithPhone) => {
        return axiosService.post(`${URL}/phone/register`, body);
    },
    loginWithPhone: (body: ILoginWithPhone) => {
        return axiosService.post(`${URL}/phone/login`, body);
    },
    sendOTPRegister: (body: ISendOTPRegister) => {
        return axiosService.post(`${URL}/send-otp-register`, body);
    },
    verifyOTP: (body: IVerifyOTP) => {
        return axiosService.post<IVerifyOTPResponse>(`${URL}/verify-otp`, {
            ...body,
        });
    },
};
export default authApi;
