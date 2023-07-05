import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'map';
const URL = `${API}/${ENDPOINT}`;

const mapApi = {
    updateLocation: (body: IUpdateLocation) => axiosService.put<IResponseUpdateLocation>(`${URL}`, body),

    findFriendsAround: () => axiosService.get<IFindFriendsAroundResponse>(`${URL}`),
};
export default mapApi;
