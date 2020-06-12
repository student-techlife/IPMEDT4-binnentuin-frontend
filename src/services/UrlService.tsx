let apiDomain = ''

if (process.env.NODE_ENV === 'development') {
    apiDomain = 'https://admin.binnentuin.live/';
} else {
    apiDomain = 'http://127.0.0.1:8001/';
}

class UrlService {
    static loginUrl() { return apiDomain + 'api/login'; }
}

export default UrlService;