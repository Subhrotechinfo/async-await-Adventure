//
//http://data.fixer.io/api/latest?access_key=0bbba1f10ae4c09b748e86c425647ee9&format=1
const axios  = require('axios');

// const getExchangeRate = (from , to) => {
//     return axios.get('http://data.fixer.io/api/latest?access_key=0bbba1f10ae4c09b748e86c425647ee9&format=1').then((response) => {
//         const euro = 1 /response.data.rates[from];
//         const rate = euro * response.data.rates[to];
//         return rate;
//     });
// };
//async version
const getExchangeRate = async (from , to) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=0bbba1f10ae4c09b748e86c425647ee9&format=1');
  const euro = 1 /response.data.rates[from];
  const rate = euro * response.data.rates[to];
  return rate;
};

// const getCountries = (currencyCode) => {
//   return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) =>{
//     return response.data.map((country) => country.name );
//   });
// };

//async version
const getCountries = async (currencyCode) => {
  var response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map((country) => country.name );
};

getCountries('INR').then((countries)=> {
  console.log(countries);
});

getExchangeRate('USD','CAD').then((rate) => {
  console.log(rate);
});
