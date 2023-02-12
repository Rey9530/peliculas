import axios from 'axios';
import { URL_API,TOKEN_API } from './env';

export const clientApi = axios.create({
    baseURL: URL_API,
    params:{ api_key:TOKEN_API,language:"es-ES"}
});