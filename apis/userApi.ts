import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'user';
const URL = `${API}/${ENDPOINT}`;

const userApi = {
    findStrangeFriendsAround: () => axiosService.get<IFindStrangeFriendsAroundResponse>(`${URL}/strange-friends`),
    blockUser: (userId: string) =>
        axiosService.post<IResponseUser>(`${URL}/block/`, {
            userId,
        }),
    unblockUser: (userId: string) =>
        axiosService.post<IResponseUser>(`${URL}/unblock/`, {
            userId,
        }),
    likeUser: (userId: string) =>
        axiosService.post<IResponseUser>(`${URL}/like/`, {
            userId,
        }),

    updateHobbies: (hobbies: string[]) =>
        axiosService.patch<IUpdateHobbiesResponse>(`${URL}/hobby`, {
            hobbies,
        }),
};
export default userApi;
