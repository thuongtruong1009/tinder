import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'education';
const URL = `${API}/${ENDPOINT}`;

const educationApi = {
    getAllEducations: () => axiosService.get<IGetAllEducationsResponse>(URL),
};
export default educationApi;
