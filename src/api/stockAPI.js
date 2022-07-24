const STOCKS_API_URL = 'https://api-stocks-mjc.herokuapp.com/';

async function fetchStocks() {
  const response = await fetch(STOCKS_API_URL);
  const apiStocksResult = await response.json();
  return apiStocksResult;
}

export default fetchStocks;
