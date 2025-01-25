$(document).ready(function () {
    $(".try1").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "5.25rem");
        $(".vehica-menu-hover").css("left", "16.5rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
    $(".try2").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "7.25rem");
        $(".vehica-menu-hover").css("left", "22.75rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
    $(".try3").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "7.25rem");
        $(".vehica-menu-hover").css("left", "32.25rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
    $(".try4").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "7.25rem");
        $(".vehica-menu-hover").css("left", "41.75rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
    $(".try5").mouseenter(function () {
        $(".vehica-menu-hover").css("width", "7.25rem");
        $(".vehica-menu-hover").css("left", "47.75rem");
    }).mouseleave(function () {
        $(".vehica-menu-hover").css("width", "0px");
        $(".vehica-menu-hover").css("left", "0px");
    }); 
});

$(document).ready(function () {
    $(".imglogo").mouseenter(function () {
        $(".imagee").attr("src", "Img/CarzMella2.png")
    }).mouseleave(function () {
        $(".imagee").attr("src", "Img/CarzMella.png")
    });
});

$(document).ready(function () {
    $(".btnSOT").mouseenter(function () {
        $(".btnSoT").addClass("btn-warning")
        $(".aSot").addClass("text-dark")
    }).mouseleave(function () {
        $(".btnSoT").removeClass("btn-warning")
        $(".aSot").removeClass("text-dark")
    });
});    

// WTR

function lefti() {
    document.getElementById("oneP").children[0].style.filter = "blur(0.5rem)";
    document.getElementById("oneP").children[1].style.display = "block";
}

function lefti2() {
    document.getElementById("oneP").children[0].style.filter = "none";
    document.getElementById("oneP").children[1].style.display = "none";
}

function righti() {
    document.getElementById("twoP").children[0].style.filter = "blur(0.5rem)";
    document.getElementById("twoP").children[1].style.display = "block";
}

function righti2() {
    document.getElementById("twoP").children[0].style.filter = "none";
    document.getElementById("twoP").children[1].style.display = "none";
}

var carName = [];
var carModel = [];
var carValue = [];

var products = [
    "Mercedes G500", "Img/Mercedes.jpg", 77,
    "Mercedes AMG GT R", "Img/Mercedes2.jpg", 23,

    "Luxury Villa", "Img/Villa.jpg", 83,
    "Skycraper", "Img/Skycraper.jpg", 17,

    "Personal Jet And Super Car", "Img/Jet.jpg", 64,
    "Personal Yacht And Helicopter", "Img/Yacth.jpg", 36,

    "Playstation 5", "Img/Playstation5.jpg", 50,
    "Gaming Computer", "Img/Computer.jpg", 50,

    "Ford Mustang 2021", "Img/Mustang2021.jpg", 49,
    "Ford Mustang 1969", "Img/1969Mustang.gif", 51,
];

var time = 6;
var nextNumber = 3;
var innerTime = 0;
var innerModelTime1 = 1;
var innerModelTime2 = 4;
var innerNumber = 1;

function buttonV(buttonValue) {
    var modal = document.getElementById("myModal");
    var valueOfmodel = buttonValue.value;

    //This is bullshit
    //Someday you will find the solution 

    if (valueOfmodel == 1) {
        carName.push(products[0]);
        carModel.push(products[1]);
        carValue.push(products[2]);
        modelChange = products[2];
    } else if (valueOfmodel == 2) {
        carName.push(products[3]);
        carModel.push(products[4]);
        carValue.push(products[5]);
        modelChange = products[5];
    } else if (valueOfmodel == 3) {
        carName.push(products[6]);
        carModel.push(products[7]);
        carValue.push(products[8]);
        modelChange = products[8];
    } else if (valueOfmodel == 4) {
        carName.push(products[9]);
        carModel.push(products[10]);
        carValue.push(products[11]);
        modelChange = products[11];
    } else if (valueOfmodel == 5) {
        carName.push(products[12]);
        carModel.push(products[13]);
        carValue.push(products[14]);
        modelChange = products[14];
    } else if (valueOfmodel == 6) {
        carName.push(products[15]);
        carModel.push(products[16]);
        carValue.push(products[17]);
        modelChange = products[17];
    } else if (valueOfmodel == 7) {
        carName.push(products[18]);
        carModel.push(products[19]);
        carValue.push(products[20]);
        modelChange = products[20];
    } else if (valueOfmodel == 8) {
        carName.push(products[21]);
        carModel.push(products[22]);
        carValue.push(products[23]);
        modelChange = products[23];
    } else if (valueOfmodel == 9) {
        carName.push(products[24]);
        carModel.push(products[25]);
        carValue.push(products[26]);
        modelChange = products[26];
    } else if (valueOfmodel == 10) {
        carName.push(products[27]);
        carModel.push(products[28]);
        carValue.push(products[29]);
        modelChange = products[29];
    }


    console.log(carName);
    console.log(carModel);
    console.log(carValue);

    modal.style.display = "block";
    document.getElementById("modal-percent").innerHTML = modelChange;

    setTimeout(function () {
        modal.style.display = "none";

        if (products[time] !== undefined) {
            document.getElementById("HeadT").children[0].innerHTML = products[time];
            time++
            document.getElementById("oneP").children[0].src = products[time];
            time++
            document.getElementById("oneP").children[1].children[0].value = nextNumber;
            time++
            nextNumber++

            document.getElementById("HeadT").children[1].innerHTML = products[time];
            time++
            document.getElementById("twoP").children[0].src = products[time];
            time++
            document.getElementById("twoP").children[1].children[0].value = nextNumber;
            time++
            nextNumber++


            // Odd Number Check
            console.log(valueOfmodel);
            function isOdd(num) { return num % 2; }
            var trynum = isOdd(valueOfmodel);


            const ccItem = document.createElement('div');

            if (trynum == 1) {
                if (carValue[innerTime] < 50) {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: red;">%${carValue[innerTime]}</span></h3>
    <div class="container">
        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 340px;">
        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 20px;">
    </div>
</div>`;
                }
                else if (carValue[innerTime] > 50) {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: green;">%${carValue[innerTime]}</span></h3>
    <div class="container">
        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 340px;">
        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 20px;">
    </div>
</div>`;
                }
            } else if (trynum == 0) {
                if (carValue[innerTime] < 50) {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: red;">%${carValue[innerTime]}</span></h3>
    <div class="container">
        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
    </div>
</div>`;
                }
                else if (carValue[innerTime] > 50) {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: green;">%${carValue[innerTime]}</span></h3>
    <div class="container">
        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
    </div>
</div>`;
                }
                else {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
    <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: gray;">%${carValue[innerTime]}</span></h3>
    <div class="container">
        <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
        <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
        <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
    </div>
</div>`;
                }
            }

            innerNumber++

            innerModelTime1 += 6;
            innerModelTime2 += 6;

            const selectE = document.getElementById("addMe");
            selectE.insertBefore(ccItem, selectE.childNodes[innerTime]);

            innerTime++

        } else {
            document.getElementById("HeadT").innerHTML = "The choices you make all through the game"
            document.getElementById("oneP").remove();
            document.getElementById("twoP").remove();

            // Top row Copy Paste
            const ccItem = document.createElement('div');

            function isOdd(num) { return num % 2; }
            var trynum = isOdd(valueOfmodel);

            if (trynum == 1) {
                if (carValue[innerTime] < 50) {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
        <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: red;">%${carValue[innerTime]}</span></h3>
        <div class="container">
            <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Okey.png" width="10%" style="right: 340px;">
            <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Flase.png" width="10%" style="right: 20px;">
        </div>
    </div>`;
                }
                else if (carValue[innerTime] > 50) {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
        <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: green;">%${carValue[innerTime]}</span></h3>
        <div class="container">
            <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Okey.png" width="10%" style="right: 340px;">
            <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Flase.png" width="10%" style="right: 20px;">
        </div>
    </div>`;
                }
            } else if (trynum == 0) {
                if (carValue[innerTime] < 50) {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
        <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: red;">%${carValue[innerTime]}</span></h3>
        <div class="container">
            <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
            <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
        </div>
    </div>`;
                }
                else if (carValue[innerTime] > 50) {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
        <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: green;">%${carValue[innerTime]}</span></h3>
        <div class="container">
            <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
            <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
        </div>
    </div>`;
                }
                else {
                    ccItem.innerHTML =
                        `<div id="oneF" class="column" style="margin-left: 32%;">
        <h3 align="center" style="margin: 1rem;"><span>${innerNumber + "."}</span> Your Choose <span class="textHead">${carName[innerTime]}</span> and It's selection rate is <span style="color: gray;">%${carValue[innerTime]}</span></h3>
        <div class="container">
            <img src="${products[innerModelTime1]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Flase.png" width="10%" style="right: 340px;">
            <img src="${products[innerModelTime2]}" width="43%" style="margin-left: 1.25rem; margin-right: 1.25rem; position: relative;">
            <img class="overlay"src="Img/Okey.png" width="10%" style="right: 20px;">
        </div>
    </div>`;
                }
            }

            document.getElementById("addMe").insertBefore(ccItem, document.getElementById("addMe").childNodes[innerTime]);

            document.getElementById("addMe").style.display = "block";
        }

    }, 1200)
}

// WORLD

function block(element) {
    element.previousElementSibling.style.display = "block";
}

function none(element) {
  element.previousElementSibling.style.display = "none";
}

var modal = document.getElementById("myModal");

document.getElementById("usa").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("usa").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/United_States";

}

document.getElementById("brazil").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("brazil").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Brazil";

}

document.getElementById("italy").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("italy").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Italy";

}

document.getElementById("turkey").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("turkey").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Turkey";

}

document.getElementById("egypt").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("egypt").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Egypt";

}

document.getElementById("turafricakey").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("turafricakey").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Union_of_South_Africa";

}

document.getElementById("china").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("china").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/China";

}

document.getElementById("russia").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("russia").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Russia";

}

document.getElementById("australia").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("australia").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Australia";
  
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
