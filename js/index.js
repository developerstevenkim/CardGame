let REDUCEDTIME = 2000;

let randomColor;
let textInput = document.getElementById("numOfBtn");
let goBtn = document.getElementById("goBtn");
let divFrame = document.getElementById("divFrame");
let firstPage = document.getElementById("firstPage");
let clickRightCard = document.getElementById("clickRightCard");
let i;
let arrayButtons = [];

goBtn.onclick = createObj;

function Button(color, width, height, top, left, order) {
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
        arrayButtons.push(new Button("Red", "120px", "60px", "0px", "0px", i));
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        arrayButtons[i].btn.style.backgroundColor = "#" + randomColor;
        arrayButtons[i].btn.style.top = Math.floor(Math.random() * (window.innerHeight - 60)) + "px";
        arrayButtons[i].btn.style.left = Math.floor(Math.random() * (window.innerWidth - 120)) + "px";
        arrayButtons[i].btn.style.zIndex = "-1";
    }

    function recreateObj() {
        setTimeout(function () {
            for (i = 0; i < parseInt(textInput.value); i++) {
                arrayButtons[i].btn.style.top = Math.floor(Math.random() * (window.innerHeight - 60)) + "px";
                arrayButtons[i].btn.style.left = Math.floor(Math.random() * (window.innerWidth - 120)) + "px";
            }
            REDUCEDTIME = REDUCEDTIME - 200; // change later to set maybe 30?
            if (REDUCEDTIME < 100) {
                alert("Congrats!"); // change this as well
                window.onload();
            }
            recreateObj();
        }, REDUCEDTIME);
    }

    recreateObj();

    firstPage.style.display = "none";
    para = document.createElement("p");
    para.innerHTML = "You've created " + i + " button(s).";
    divFrame.appendChild(para);
}