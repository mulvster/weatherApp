const API_KEY = '91dab84b0911d8cd401cebb7bba94d47';
const city = 'Calgary';
const countryCode = 'CA';
const rootUrl =`http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city},${countryCode}&units=metric`;
const url = rootUrl;


export const fetchWeather = () => {
    return new Promise(function(resolve, reject) {

        fetch(url).then(res => {

            res.json().then(function(data) {
                const weatherObj = {
                    temp: data.main.temp,
                    weather: data.weather[0].main
                }
                resolve(weatherObj);

            });
        }).catch(function(error) {
            reject(error.message)
            });

    });
}
