import axios from 'axios';
import UrlService from './UrlService';
import CookieService from './CookieService';

const expiresAt = 60 * 24;

interface Credentials {
    username: string;
    password: string;
}

class AuthService {
    async doUserLogin(credentials: Credentials) {
        try {
            // Voer een Laravel API login call uit
            const response = await axios.post(UrlService.loginUrl(), credentials);
            return response.data;
        } catch (error) {
            // Als inloggen niet lukt gooi dan een error
            console.error('Error', error.response);
            return false;
        }
    }

    handleLoginSuccess(response: any, remember: boolean) {
        // console.log(response, remember);
        // Session based cookie
        if (!remember) {
            const options = { path: '/'};
            CookieService.set('access_token', response.access_token, options);
            return true;
        }

        // Cookie met verloopdatum
        let date = new Date();
        date.setTime(date.getTime() + (expiresAt * 60 * 1000));
        const options = { path: '/', expires: date };
        CookieService.set('access_token', response.access_token, options);
        return true;
    }
}

export default new AuthService();