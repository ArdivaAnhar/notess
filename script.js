const minutes = new Date().getMinutes();
const hours = new Date().getHours();
const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

document.getElementById(
  "date_1"
).innerHTML = `${hours}:${minutes} ${day}/${month}/${year}`;

document.getElementById(
  "date_2"
).innerHTML = `${hours}:${minutes} ${day}/${month}/${year}`;

document.getElementById(
  "date_3"
).innerHTML = `${hours}:${minutes} ${day}/${month}/${year}`;
