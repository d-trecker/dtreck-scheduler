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

//----Capture User input----
var apptInput = function () {
  $(".edit").on("click");
  console.log(apptInput);
};

//----End Capture User Input----

//----Save Tasks----

var saveAppt = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//--------------Things still needed to do--------------
//save to local storage

// save appointment

//Change class color based on hour
