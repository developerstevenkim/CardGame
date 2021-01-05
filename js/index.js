
let MAXWDITH = ((window.innerWidth - 60) / 2) + 175;
let MINWDITH = ((window.innerWidth - 60) / 2) - 145;
let MAXHEIGHT = ((window.innerHeight - 60) / 2) + 260;
let MINHEIGHT = ((window.innerHeight - 60) / 2) - 180;


let randomColor;

let textInput = document.getElementById("numOfBtn");
let goBtn = document.getElementById("goBtn");

let divFrame = document.getElementById("divFrame");
let firstPage = document.getElementById("firstPage");
let secondPage = document.getElementById("secondPage");
let leaderBoard = document.getElementById("leaderBoard");
let comments = document.getElementById("comments");
let sns = document.getElementById("sns");
let playAgainBtn = document.getElementById("playAgainBtn");
let leaderBoardBtn = document.getElementById("leaderBoardBtn");
let commentSectionBtn = document.getElementById("commentSectionBtn");
let snsShareBtn = document.getElementById("snsShareBtn");

let clickRightCard = document.getElementById("clickRightCard");
let displayScore = document.getElementById("displayScore");

let i;
let reducedtime = 2000;
let points = 0;
let arrayButtons = [];

clickRightCard.volume = 0.3;

goBtn.onclick = createObj;

playAgainBtn.onclick = function() {
    location.href='game_test.html';
}

leaderBoardBtn.onclick = function() {
    secondPage.style.display = "none";
    leaderBoard.style.display = "block";
}

commentSectionBtn.onclick = function() {
    secondPage.style.display = "none";
    comments.style.display = "block";
}

snsShareBtn.onclick = function() {
    secondPage.style.display = "none";
    sns.style.display = "block";
}

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
        arrayButtons.push(new Button("Red", "30px", "30px", i));
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        arrayButtons[i].btn.style.backgroundColor = "#" + randomColor;
        if (i != 0) {
            arrayButtons[i].btn.style.display = "none";
        } 
    }

    arrayButtons[0].btn.style.top = (window.innerHeight - 30) / 2 + "px";
    arrayButtons[0].btn.style.left = (window.innerWidth - 30) / 2 + "px";

    recreateObj();

    firstPage.style.display = "none";
    divFrame.style.backgroundImage = "none";
}

function recreateObj() {
    setTimeout(function () {
        for (i = 0; i < parseInt(textInput.value); i++) {
            arrayButtons[i].btn.style.top = Math.floor(Math.random() * (MAXHEIGHT - MINHEIGHT) + MINHEIGHT) + "px";
            arrayButtons[i].btn.style.left = Math.floor(Math.random() * (MAXWDITH - MINWDITH) + MINWDITH) + "px";
            arrayButtons[i].btn.style.display = "block";
        }
        arrayButtons[0].btn.onclick = function() {
            getPoints();
        }
        
        reducedtime = reducedtime - 200;
        if (reducedtime < 500) {
            //game end msg.
            gameEnd();
            return;
        }

        recreateObj();
    }, reducedtime);
}

function removeBtn() {
    for (i = 0; i < parseInt(textInput.value); i++) {
        arrayButtons[i].btn.style.display = "none";
    }
    arrayButtons = [];
    console.log(arrayButtons);
}

function getPoints() {
    points++;
    displayScore.innerHTML = "Score : " + points;
    clickRightCard.play();
    for (i = 0; i < parseInt(textInput.value); i++) {
        arrayButtons[i].btn.style.display = "none";
    }
}

function gameEnd() {
    reducedtime = 2000;
    removeBtn();
    secondPage.style.display = "block";
}