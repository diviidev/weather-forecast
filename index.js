function weather() {
  var parent = document.getElementById("column1");
  var city = document.getElementById("searchbox").value;
  var key = "ecfae499d3a6990d513e872644874cd4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric%60`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var temp = document.createElement("p");
      temp.innerHTML = Math.round(data.main.temp) + " ℉";
      parent.appendChild(temp);
    });
}
