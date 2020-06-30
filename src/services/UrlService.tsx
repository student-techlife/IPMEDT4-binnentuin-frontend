let apiDomain = 'https://admin.binnentuin.live/'

// if (process.env.NODE_ENV === 'development') {
//     apiDomain = 'https://admin.binnentuin.live/';
// } else {
//     apiDomain = 'http://127.0.0.1:8001/';
// }

class UrlService {
    static loginUrl() { return apiDomain + 'api/login'; }
    static registerUrl() { return apiDomain + 'api/register'; }
    static BinnentuinMenu(category) { return apiDomain + 'api/producten/' + category; }
    static BinnentuinOpeningstijden() { return apiDomain + 'api/openingstijden_binnentuin'; }
    static TheRoofOpeningstijden() { return apiDomain + 'api/openingstijden_theroof'; }
    static ReserveerTijden() {return apiDomain + 'api/reserveertijden'; }
    static StorePretestSubmission() {return apiDomain + 'api/pretest';}
}

export default UrlService;
