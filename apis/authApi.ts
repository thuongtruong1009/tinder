import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'auth';
const URL = `${API}/${ENDPOINT}`;

const authApi = {
    loginWithPhone: (body: ILoginWithPhone) => {
        return axiosService.post(`${URL}/phone`, body);
    },
    sendOTPRegister: (body: ISendOTPRegister) => {
        return axiosService.post(`${URL}/send-otp-register`, body);
    },
    verifyOTP: (body: IVerifyOTP) => {
        return axiosService.post(`${URL}/verify-otp`, body);
    },
};
export default authApi;
