var inputvalue = document.querySelector('#cityinput')
var button = document.querySelector('#add');
var city = document.querySelector('#cityOutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temperature')
var wind = document.querySelector('#wind')

apik = "62460ef53ce3c1d9dc4cf579e5a41c46"
function convertion(value){
    return (value - 273).toFixed(2)
}

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(result => result.json())
    .then(data => {
        var namevalue = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']
        city.innerHTML=`City: ${namevalue}`
        temp.innerHTML = `Temperature: ${ convertion(temperature)} °C`
        description.innerHTML = `Conditions: ${descrip}`
        wind.innerHTML = `Wind Speed: ${windspeed} km/h`
    })
    .catch(err => alert('You entered Wrong city name'))
})

