const rootUrl = 'api.openweathermap.org/data/2.5/weather?appid=91dab84b0911d8cd401cebb7bba94d47';

export const fetchWeather = (lattitude, longitude) => {
    const url = rootUrl+'&lattitude='+lattitude+ '&longitude='+longitude;
    console.log(url)
}