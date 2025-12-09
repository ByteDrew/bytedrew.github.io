var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var site_data = JSON.parse(this.responseText);
    document.getElementById("visitorcount").textContent = site_data.info.views;
  }
};
xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=bytedrew", true);
xhttp.send();
