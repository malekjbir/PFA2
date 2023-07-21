// import { getCookieByName } from '../constants';
import { Api } from './myApi';

const apiService = new Api({
    baseUrl: import.meta.env.VITE_MY_URL,
    baseApiParams: {
        headers: {
            // 'Content-Type': 'application/json',
            // accept: 'application/json',
            ContentType: 'multipart/form-data',
            // Authorization: Bearer ${getCookieByName('token')}
        }
    }
});

export default apiService;