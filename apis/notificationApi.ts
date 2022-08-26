import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'notification';
const URL = `${API}/${ENDPOINT}`;

const notificationApi = {
    getNotifications: () => axiosService.get<IGetNotificationResponse>(`${URL}`),
    updateSeenNotification: (id: string) => axiosService.patch<IUpdateSeenNotificationResponse>(`${URL}/${id}/seen`),
};
export default notificationApi;
