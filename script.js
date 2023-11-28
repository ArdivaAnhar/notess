document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${minutes} ${ampm}`;
  const formattedDate = `${day}/${month}/${year}`;

  const date = document.getElementsByClassName("time");

  for (let i = 0; i < date.length; i++) {
    date[i].innerHTML = `${formattedTime} ${formattedDate}`;
  }
});
