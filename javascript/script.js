const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
let imgArray = new Array(3); //array object declared
let index = 0;
// add clearfix class to navbar
window.addEventListener('resize', function (event) {
    let navbar = document.querySelector("#nav-bar");
    let logo = document.querySelector("#logo");
    // do stuff here
    if (window.innerWidth < 769) {
        navbar.classList.add("clearfix");
    } else {
        navbar.classList.remove("clearfix");
    }

    if (window.innerWidth < 769) {
        logo.classList.add("clearfix");
    } else {
        logo.classList.remove("clearfix");
    }
});

window.addEventListener('load', function (event) {
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
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();


//index-page banner slide
function cycle() {
    document.querySelector('#index-banner').src = imgArray[index].src;
    index++;
    if (index > 2) {
        index = 0; // to start cycle again
    }
    setTimeout("cycle()", 2000);
    return;
}

function slide() {
    imgArray[0] = new Image();
    imgArray[0].src = "./images/im1.jpeg"; // Lake image file 1
    imgArray[1] = new Image();
    imgArray[1].src = "./images/im2.jpg"; // Lake image file 2
    imgArray[2] = new Image();
    imgArray[2].src = "./images/im3.jpg"; // Lake image file 3
    cycle();
    return;
}

//form validation
function validateTheEmail(mail) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail)) {
        document.getElementById("errorEmail").innerText = "";
        document.getElementById("errorEmail").style.color = '';
        return (true)

    }

    document.getElementById("errorEmail").innerText = "Email address is invalid";
    document.getElementById("errorEmail").style.color = 'red';
    return (false)
}

function submitForm() {
    var submitFlag = true;
    if (document.getElementById("name").value == '') {
        submitFlag = false;
        document.getElementById("errorName").innerText = "Name feild should not be empty";
        document.getElementById("errorName").style.color = 'red';
    } else {
        document.getElementById("errorName").innerText = "";
        document.getElementById("errorName").style.color = '';
    }
    if (document.getElementById("email").value == '') {
        submitFlag = false;
        document.getElementById("errorEmail").innerText = "Email feild should not be empty";
        document.getElementById("errorEmail").style.color = 'red';

    } else {
        document.getElementById("errorEmail").innerText = "";
        document.getElementById("errorEmail").style.color = '';
        if (!validateTheEmail(document.getElementById("email").value)) {
            submitFlag = false;
        }
    }
    if (document.getElementById("description").value == '') {
        submitFlag = false;
        document.getElementById("errorDesc").innerText = "Description feild should not be empty";
        document.getElementById("errorDesc").style.color = 'red';

    } else {
        document.getElementById("errorDesc").innerText = "";
        document.getElementById("errorDesc").style.color = '';
        var desc = document.getElementById("description").value;
        if (desc.length < 30) {
            submitFlag = false;
            document.getElementById("errorDesc").innerText = "Description should be atleast 30 characters";
            document.getElementById("errorDesc").style.color = 'red';
        }
    }
    if (submitFlag) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("submitText").innerHTML = "<br><p>Hello " + document.getElementById("name").value + "! " + this.responseText + "</p>";
                document.getElementById("submitText").firstChild.style.color = 'black';
            }
        };
        xhttp.open("GET", "/textFiles/submitted_info.txt", true);
        xhttp.send();
    }
}