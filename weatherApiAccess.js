const rootUrl = 'api.openweathermap.org/data/2.5/weather?cityName={cityName}appid=91dab84b0911d8cd401cebb7bba94d47';

export const fetchWeather = (cityName) => {
    const url = rootUrl + '&cityName=' + cityName;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(json => console.log({json}))
        .catch(e => console.log(e));
}

