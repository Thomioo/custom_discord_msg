var On = function()
{
  // var orgSite = "http://192.168.2.241:8000/start";
  var site = document.getElementById("adress").value.toString() + ":8000/on";
  fetch(site);
}
var Off = function()
{
  var site = document.getElementById("adress").value.toString() + ":8000/off";
  fetch(site);
}
