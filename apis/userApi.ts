import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'user';
const URL = `${API}/${ENDPOINT}`;

const userApi = {
    findStrangeFriendsAround: () => axiosService.get<IResponseUser[]>(`${URL}/strange-friends`),
};
export default userApi;
