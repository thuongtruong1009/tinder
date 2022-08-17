import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'notification';
const URL = `${API}/${ENDPOINT}`;

const notificationApi = {
    getNotifications: () => axiosService.get<IGetNotificationResponse>(`${URL}`),
};
export default notificationApi;
