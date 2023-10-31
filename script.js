const findMe = () => {
  navigator.geolocation.getCurrentPosition((Myplaces)=>{
    let information = Myplaces.coords;
    locationLatitude = Math.round(information.latitude);
    locationLongitude = Math.round(information.longitude);
    display.innerHTML = `<p style="background-color: green;
    margin:16px;
    color: white;
    height: 25px;
    border-radius: 5px;">your location is : ${locationLatitude}N and ${locationLongitude}E</p>`
  })
}
