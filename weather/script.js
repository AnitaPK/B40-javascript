function getWeather(){
    city = document.getElementById('cityInput').value;
    getWeatherDetails(city)

}

function getWeatherDetails(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ca018df54353f065aaed7d802825b8be`)
    .then(response =>response.json())
    .then(data=>{
        console.log(data);
        showWeather(data);
        });
}
getWeatherDetails()


function showWeather(data){
    document.getElementById('weatherData').innerHTML = `
                                                        <h2>
                                                        ${data.name} 
                                                        <span style="color:gray">${data.sys.country}</span>
                                                        </h2>
                                                        <p>Temp:<span  style="color:gray">${data.main.temp}</span></p>
    `
}


// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
// base
// : 
// "stations"
// clouds
// : 
// {all: 10}
// cod
// : 
// 200
// coord
// : 
// {lon: 73.8553, lat: 18.5196}
// dt
// : 
// 1735195669
// id
// : 
// 1259229
// main
// : 
// {temp: 302.61, feels_like: 302.14, temp_min: 302.61, temp_max: 302.61, pressure: 1015, …}
// name
// : 
// "Pune"
// sys
// : 
// {country: 'IN', sunrise: 1735176871, sunset: 1735216541}
// timezone
// : 
// 19800
// visibility
// : 
// 10000
// weather
// : 
// [{…}]
// wind
// : 
// {speed: 4.94, deg: 143, gust: 6.1}
// [[Prototype]]
