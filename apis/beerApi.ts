import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'beer';
const URL = `${API}/${ENDPOINT}`;

const beerApi = {
    getAllBeers: () => axiosService.get<IGetAllBeersResponse>(URL),
};
export default beerApi;
