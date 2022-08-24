import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'message';
const URL = `${API}/${ENDPOINT}`;

const messageApi = {
    create: (body: FormData) =>
        axiosService.post<ICreateMessageResponse>(URL, body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }),
};
export default messageApi;
