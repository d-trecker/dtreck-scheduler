//----Display Time----
const currentTime = document.getElementById("display-time");

function timeUpdate() {
  const now = moment();
  const time = now.format("dddd, MMMM Do YYYY, h:mm:ss a");

  currentTime.textContent = time;
}
setInterval(timeUpdate, 1000);
timeUpdate();
//----End Display Time----

//----Save Tasks to Local Storage----
var saveAppt = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};
//----Load Tasks from Local Storage when re-opening or refreshing page----
window.onload = function () {
  document.getElementById("appt9").textContent =
    document.getElementById("appt9").value === ""
      ? localStorage.getItem("9AM").replace(/"/g, "")
      : "";

  document.getElementById("appt10").textContent =
    document.getElementById("appt10").value === ""
      ? localStorage.getItem("10AM").replace(/"/g, "")
      : "";

  document.getElementById("appt11").textContent =
    document.getElementById("appt11").value === ""
      ? localStorage.getItem("11AM").replace(/"/g, "")
      : "";

  document.getElementById("appt12").textContent =
    document.getElementById("appt12").value === ""
      ? localStorage.getItem("12PM").replace(/"/g, "")
      : "";

  document.getElementById("appt1").textContent =
    document.getElementById("appt1").value === ""
      ? localStorage.getItem("1PM").replace(/"/g, "")
      : "";

  document.getElementById("appt2").textContent =
    document.getElementById("appt2").value === ""
      ? localStorage.getItem("2PM").replace(/"/g, "")
      : "";

  document.getElementById("appt3").textContent =
    document.getElementById("appt3").value === ""
      ? localStorage.getItem("3PM").replace(/"/g, "")
      : "";

  document.getElementById("appt4").textContent =
    document.getElementById("appt4").value === ""
      ? localStorage.getItem("4PM").replace(/"/g, "")
      : "";

  document.getElementById("appt5").textContent =
    document.getElementById("appt5").value === ""
      ? localStorage.getItem("5PM").replace(/"/g, "")
      : "";
};

//--------------Things still needed to do--------------

//Change class color based on hour
