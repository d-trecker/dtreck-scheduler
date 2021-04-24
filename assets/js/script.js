const apt = document.querySelectorAll("#table-edit td.apt");

// const apt = document.getElementById("aptId");
const timeRow = document.getElementById("time-row");

apt.forEach(function (aptSet) {
  aptSet.addEventListener("click", function () {
    apt.style.background = "blue";
  });
});

// var t = document.getElementById("table-edit"),
//   d = t.getElementByTagName("tr")[0],
//   r = d.getElementByTagName("td")[0];

// apt.onclick = function () {
//   debugger;
//   apt.style.background = "blue";
// };

//save to local storage

// save appointment

//Change class color based on hour
