const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// add clearfix class to navbar
window.addEventListener('resize', function(event) {
    let navbar = document.querySelector("#nav-bar");
    let logo = document.querySelector("#logo");
    // do stuff here
    if (window.innerWidth > 769) {
        //     navbar.classList.add("clearfix");
        // } else {
        navbar.classList.remove("clearfix");
    }

    if (window.innerWidth > 769) {
        //     logo.classList.add("clearfix");
        // } else {
        logo.classList.remove("clearfix");
    }
});

// show sidebar
navBtn.addEventListener("click", function() {
    sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();

function submitForm() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("submitText").innerHTML = "<p>Hello " + document.getElementById("name").value + "! " + this.responseText + "</p>";
        }
    };
    xhttp.open("GET", "/textFiles/submitted_info.txt", true);
    xhttp.send();
}