$.getJSON(
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=wjW7AIZc8sDUbG731yM6fsKCUS6A92fJ",
    function(data) {
        console.log(data);

        //var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var abstract1 = data.results[0].abstract;
        var date1 = data.results[0].published_date;
        var title1 = data.results[0].title;
        var abstract2 = data.results[1].abstract;
        var date2 = data.results[1].published_date;
        var title2 = data.results[1].title;
        var abstract3 = data.results[2].abstract;
        var date3 = data.results[2].published_date;
        var title3 = data.results[2].title;
        var abstract4 = data.results[3].abstract;
        var date4 = data.results[3].published_date;
        var title4 = data.results[3].title;
        var abstract6 = data.results[6].abstract;
        $('.abstract1').append(abstract1);
        $('.date1').append(date1);
        $('.title1').append(title1);
        $('.abstract2').append(abstract2);
        $('.date2').append(date2);
        $('.title2').append(title2);
        $('.abstract3').append(abstract3);
        $('.date3').append(date3);
        $('.title3').append(title3);
        $('.abstract4').append(abstract4);
        $('.date4').append(date4);
        $('.title4').append(title4);
        $('.abstract6').append(abstract6);
    }
);

var city = "Semarang";

$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=92d051e99930405d9a1fb4555cf13c4a",
    function(data) {
        console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;
        $('.icon').attr('src',icon);
        $('.weather').append(weather);
        $('.temp').append(temp);
    }
);

