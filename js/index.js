let REDUCEDTIME = 2000;
let MAXWDITH = ((window.innerWidth - 60) / 2) + 145;
let MINWDITH = ((window.innerWidth - 60) / 2) - 145;
let MAXHEIGHT = ((window.innerHeight - 60) / 2) + 220;
let MINHEIGHT = ((window.innerHeight - 60) / 2) - 220;


let randomColor;
let textInput = document.getElementById("numOfBtn");
let goBtn = document.getElementById("goBtn");
let divFrame = document.getElementById("divFrame");
let firstPage = document.getElementById("firstPage");
let clickRightCard = document.getElementById("clickRightCard");
let displayScore = document.getElementById("displayScore");
let i;
let points = 0;
let arrayButtons = [];

clickRightCard.volume = 0.3;

goBtn.onclick = createObj;

function Button(color, width, height, order) {
    this.order = order;
    this.btn = document.createElement("button");
    this.btn.style.backgroundColor = color;
    this.btn.style.width = width;
    this.btn.style.height = height;
    this.btn.style.position = "absolute";
    document.body.appendChild(this.btn);
}

function createObj() {
    for (i = 0; i < parseInt(textInput.value); i++) {
        arrayButtons.push(new Button("Red", "60px", "60px", i));
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        arrayButtons[i].btn.style.backgroundColor = "#" + randomColor;
        if (i != 0) {
            arrayButtons[i].btn.style.display = "none";
        } 
    }

    arrayButtons[0].btn.style.top = (window.innerHeight - 60) / 2 + "px";
    arrayButtons[0].btn.style.left = (window.innerWidth - 60) / 2 + "px";


    recreateObj();

    firstPage.style.display = "none";
}

function recreateObj() {
    setTimeout(function () {
        for (i = 0; i < parseInt(textInput.value); i++) {
            arrayButtons[i].btn.style.top = Math.floor(Math.random() * (MAXHEIGHT - MINHEIGHT) + MINHEIGHT) - 80 + "px";
            arrayButtons[i].btn.style.left = Math.floor(Math.random() * (MAXWDITH - MINWDITH) + MINWDITH) + "px";
            arrayButtons[i].btn.style.display = "block";
        }
        arrayButtons[0].btn.onclick = function() {
            getPoints();
        }
        
        REDUCEDTIME = REDUCEDTIME - 20;
        if (REDUCEDTIME < 300) {
            alert("Congrats!"); // change this later
            window.onload();
        }

        recreateObj();
    }, REDUCEDTIME);
}

function getPoints() {
    points++;
    displayScore.innerHTML = "Score : " + points;
    clickRightCard.play();
    for (i = 0; i < parseInt(textInput.value); i++) {
        arrayButtons[i].btn.style.display = "none";
    }
}