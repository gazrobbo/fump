// Event listener for button click

document.getElementById("agreeCookies").addEventListener("click", function () {

  // When button is clicked, store a value in the browser 'session'.

  sessionStorage.setItem("cookies-notification", true);
  document.getElementById("cookies-notification").style.display = "none";

});



// When the page loads, check the browser session and see if cookies have been agreed

// then hide popup or show popup as appropriate

if (sessionStorage.getItem("cookies-notification")) {

  // flag stored so hide popup

  document.getElementById("cookies-notification").style.display = "none";
  document.getElementById("front-page").style.display = "none";

} else {

  // no flag so show popup

  document.getElementById("cookies-notification").style.display = "block";


};