import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'user';
const URL = `${API}/${ENDPOINT}`;

const userApi = {
    updateHobbies: () => axiosService.patch<IResponseUser[]>(`${URL}/hobby`),
    findStrangeFriendsAround: () => axiosService.get<IFindStrangeFriendsAroundResponse>(`${URL}/strange-friends`),
};
export default userApi;
