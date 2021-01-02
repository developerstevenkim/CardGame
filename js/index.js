let randomColor;
let textInput = document.createElement("input");
let goBtn = document.createElement("button");
let i;
let arrayButtons = [];

textInput.innerHTML = "Type here";
goBtn.innerHTML = "Go!";
document.body.appendChild(textInput);
document.body.appendChild(goBtn);

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
    setInterval(function () {
        for (i = 0; i < parseInt(textInput.value); i++) {
            arrayButtons[i].btn.style.top = Math.floor(Math.random() * (window.innerHeight - 60)) + "px";
            arrayButtons[i].btn.style.left = Math.floor(Math.random() * (window.innerWidth - 120)) + "px";
        }
    }, 2000);

    textInput.style.display = "none";
    goBtn.style.display = "none";
    para = document.createElement("p");
    para.innerHTML = "Part B<br><br>You've created " + i + " button(s).";
    document.body.appendChild(para);
}