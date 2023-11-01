//CARD TIMER ==================================================================================
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})

//LOCALIZAÇÃO FIXA - ARACAJU - LONGITUDE X LATITUDE
function getUserPosition() {
    let url = ''
      let lat = -10.9095
      let long = -37.0748
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`
      fetchApi(url)
      console.log(url)

}

//SOLICITAR A LOCALIZAÇÃO DO USUÁRIO
/*
  function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = -9.648139
      let long = -35.717239
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`
      fetchApi(url)
      console.log(url)
    })
  }
  */

  function fetchApi(url) {
    let city = document.querySelector('.city')
    let temperature = document.querySelector('#temp')
    let humidity = document.querySelector('#umidad')
  
    fetch(url)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      
      city.textContent      = data.name
      temperature.innerHTML = tempInCelsius
      humidity.innerHTML    = data.main.humidity
    })
    .catch((err) => {
      city.innerText = `Impossível acessar a sua localização. Verifique a sua conexão.`;
      temperature.innerHTML = `-`;
    })
  }

  
getUserPosition();

//CARD TIMER ==================================================================================