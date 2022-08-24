import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'gift';
const URL = `${API}/${ENDPOINT}`;

const giftApi = {
    getAllGifts: () => axiosService.get<IGetAllGiftResponse>(URL),
};
export default giftApi;
