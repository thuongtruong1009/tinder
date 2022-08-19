import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'hobby';
const URL = `${API}/${ENDPOINT}`;

const hobbyApi = {
    getAllHobbies: () => axiosService.get<IGetAllHobbiesResponse>(URL),
};
export default hobbyApi;
