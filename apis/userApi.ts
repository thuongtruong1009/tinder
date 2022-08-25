import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'user';
const URL = `${API}/${ENDPOINT}`;

const userApi = {
    getFriends: () => axiosService.get<IGetFriendResponse>(`${URL}/friends`),
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
    firstUpdate: (body: IFirstUpdateUser) =>
        axiosService.put<IFirstUpdateUserResponse>(`${URL}/first-update-profile`, body),
    updateBio: (body: IUpdateBio) => axiosService.put<IUpdateBioResponse>(`${URL}/bio`, body),
    updateReligion: (body: IUpdateReligion) => axiosService.put<IUpdateReligionResponse>(`${URL}/religion`, body),
    updateEducation: (id: string) =>
        axiosService.put<IUpdateUserEducationsResponse>(`${URL}/education`, {
            id,
        }),
    updateGender: (id: string) =>
        axiosService.put<IUpdateUserGenderResponse>(`${URL}/gender`, {
            id,
        }),
    updateBeer: (id: string) =>
        axiosService.put<IUpdateUserBeerResponse>(`${URL}/beer`, {
            id,
        }),
    updateReason: (reason: string) =>
        axiosService.put<IUpdateUserReasonResponse>(`${URL}/reason`, {
            reason,
        }),
    uploadAlbums: (formData: FormData) =>
        axiosService.post<IUploadUserAlbumsResponse>(`${URL}/albums`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }),
    updateFavorite: (url: string) =>
        axiosService.put<IUpdateFavoriteResponse>(`${URL}/update-favorite-image`, {
            url,
        }),
    updateDefault: (url: string) =>
        axiosService.put<IUpdateDefaultResponse>(`${URL}/update-default-image`, {
            url,
        }),
    deleteImage: (url: string) =>
        axiosService.delete<IDeleteImageResponse>(`${URL}/delete-image`, {
            data: {
                url,
            },
        }),
    updateCommonInfo: (formData: FormData) =>
        axiosService.put<IUpdateUserCommonInfoResponse>(`${URL}/common-info`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }),
    updateHeight: (height: number) => axiosService.put<IUpdateUserHeightResponse>(`${URL}/update-height`, { height }),
};

export default userApi;
