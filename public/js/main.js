// Would You Rather functions
function lefti() {
    document.getElementById("oneP").children[0].style.filter = "blur(0.25rem)";
    document.getElementById("oneP").children[1].style.display = "block";
}

function lefti2() {
    document.getElementById("oneP").children[0].style.filter = "none";
    document.getElementById("oneP").children[1].style.display = "none";
}

function righti() {
    document.getElementById("twoP").children[0].style.filter = "blur(0.25rem)";
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
    "Mercedes G500", "img/Mercedes.jpg", 77,
    "Mercedes AMG GT R", "img/Mercedes2.jpg", 23,

    "Luxury Villa", "img/Villa.jpg", 83,
    "Skycraper", "img/Skycraper.jpg", 17,

    "Personal Jet And Super Car", "img/Jet.jpg", 64,
    "Personal Yacht And Helicopter", "img/Yacth.jpg", 36,

    "Playstation 5", "img/Playstation5.jpg", 50,
    "Gaming Computer", "img/Computer.jpg", 50,

    "Ford Mustang 2021", "img/Mustang2021.jpg", 49,
    "Ford Mustang 1969", "img/1969Mustang.gif", 51,
];

var time = 6;
var nextNumber = 3;
var innerTime = 0;
var innerModelTime1 = 1;
var innerModelTime2 = 4;
var innerNumber = 1;
var totalPairs = 5; // There are 10 options => 5 pairs

function animateSelectionByValue(valueOfmodel) {
    var isLeft = (Number(valueOfmodel) % 2) === 1;
    var target = document.getElementById(isLeft ? "oneP" : "twoP");
    if (!target) return;

    var useFlip = Math.random() < 0.5;
    var cls = useFlip ? "flip-anim" : "explode-anim";
    target.classList.add(cls);

    setTimeout(function () {
        target.classList.remove(cls);
        // Reset inline styles that explode animation might leave
        target.style.opacity = "";
        target.style.transform = "";
        target.style.filter = "";
    }, 650);
}

function buttonV(buttonValue) {
    var modal = document.getElementById("myModal");
    var valueOfmodel = buttonValue.value;

    // animate selected card
    animateSelectionByValue(valueOfmodel);

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
        } else {
            // No more products => show results
            showResults();
        }
    }, 2000);
}

// End of script

function showResults() {
    var overlay = document.getElementById("resultsOverlay");
    var list = document.getElementById("resultsList");
    if (!overlay || !list) return;

    // Build result items using collected arrays
    list.innerHTML = "";
    for (var i = 0; i < carName.length; i++) {
        var name = carName[i];
        var img = carModel[i];
        var percent = carValue[i];

        var item = document.createElement("div");
        item.className = "results-item";
        item.innerHTML =
            '<img src="' + img + '" alt="' + name + '">' +
            '<div class="meta">' +
            '<strong>' + name + '</strong>' +
            '<span>% ' + percent + ' preferred</span>' +
            '</div>';
        list.appendChild(item);
    }

    overlay.style.display = "flex";

    var restart = document.getElementById("restartBtn");
    if (restart) {
        restart.onclick = function () {
            resetGame();
        };
    }
}

function resetGame() {
    // reset state
    carName = [];
    carModel = [];
    carValue = [];
    time = 6;
    nextNumber = 3;

    // Reset first question
    document.getElementById("HeadT").children[0].innerHTML = products[0];
    document.getElementById("oneP").children[0].src = products[1];
    document.getElementById("oneP").children[1].children[0].value = 1;
    document.getElementById("HeadT").children[1].innerHTML = products[3];
    document.getElementById("twoP").children[0].src = products[4];
    document.getElementById("twoP").children[1].children[0].value = 2;

    var overlay = document.getElementById("resultsOverlay");
    if (overlay) overlay.style.display = "none";
}