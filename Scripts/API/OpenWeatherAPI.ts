//get weather forcast for a city
var weatherList = new Array();

function getWeather(city) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?APPID=8ae9af35ebecc657fdbea29d9fad7669&q="+city,
        type: "POST",
        processData: false
    })
        .done(function (data) {
            //Empty the list
            weatherList = new Array();
            // if data exists for the city
            if (data != null || data.list.length == 0) {
                for (var i = 0; i < data.list.length; i = i + 8) {
                    var weather = data.list[i];
                    weatherList.push(new WeatherTile(weather));
                }
                populateTiles();
            }
            else {
                alert( "We did not get any data. Does that City exist?");
            }
        })
        .fail(function (error) {
            alert( "Sorry, something went wrong. :( Try again in a bit?");
            console.log(error.getAllResponseHeaders());
        });
}

//Single tile data pased via the OpenWeatherAPI
function populateTiles() {
    var tiles = $(".WeatherTile");
    var iterator = 0;
    tiles.each(function () {
        var tileData = weatherList[iterator];
        $(this).find(".title").html(tileData.date);
        $(this).find(".desc").html(tileData.description);
        $(this).find(".temp").html(parseFloat(tileData.temperature).toFixed(2));
        setTileColour(this);
        iterator++;
    });

}

class WeatherTile {
    temperature: number;
    description: string;
    iconid: string;
    date: string;

    constructor(data) {
        this.temperature = data.main.temp - 273.15;
        this.description = data.weather[0].description;
        this.iconid = data.weather[0].id;
        this.date = data.dt_txt;
    }
}

