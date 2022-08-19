import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'gender';
const URL = `${API}/${ENDPOINT}`;

const genderApi = {
    getAllGenders: () => axiosService.get<IGetAllGendersResponse>(URL),
};
export default genderApi;
