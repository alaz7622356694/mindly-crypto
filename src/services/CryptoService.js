import axios from "axios";
const CRYPTO_API_BASE_URL = "https://mindly-back.herokuapp.com/api/crypto";
const marketDataUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";

class CryptoService {
 
  getCrypto() {
    return axios.get(CRYPTO_API_BASE_URL).then(res=>res.data);
  }

  getCryptoById(cryptoId) {
    return axios.get(CRYPTO_API_BASE_URL + "/" + cryptoId);
  }

  addCrypto(crypto) {
    return axios.post(CRYPTO_API_BASE_URL, crypto);
  }

  getMarketsData() {
    return axios.get(marketDataUrl);
  }
  deleteCrypto(id) {
    return axios.delete(CRYPTO_API_BASE_URL + "/" + id);
  }
}
export default new CryptoService();
