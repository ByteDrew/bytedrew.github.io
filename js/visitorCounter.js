var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var site_data = JSON.parse(this.responseText);
    document.getElementById("visitorcount").textContent = site_data.today_hits;
  }
};
xhttp.open("GET", "https://hitscounter.dev/api/hit?output=json&url=https%3A%2F%2Fbytedrew.github.io%2F&label=Visitor&icon=award&color=%23198754&message=&style=flat&tz=UTC", true);
xhttp.send();
