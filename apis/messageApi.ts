import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'message';
const URL = `${API}/${ENDPOINT}`;

const messageApi = {
    create: (body: IDataCreateMessage) => axiosService.post<ICreateMessageResponse>(URL, body),
};
export default messageApi;
