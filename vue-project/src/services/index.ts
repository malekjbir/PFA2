// import { getCookieByName } from '../constants';
import { Api } from './myApi';

const apiService = new Api({
    baseUrl: 'https://3000-malekjbir-nestproject-nx4nuzz3lye.ws-eu101.gitpod.io',
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