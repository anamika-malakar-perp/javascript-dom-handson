let text = document.getElementById('text');
console.log(text.innerText);


let headTag = document.getElementsByTagName('h1');
console.log(headTag[0].innerText);

let box = document.getElementsByClassName('box');
console.log(box[0].innerText);

let headingName = document.getElementById('change-name');
headingName.innerText = 'Hello World';
console.log(headingName.innerText);

let changeBtn = document.getElementById('change-btn');
let boxAlign  = document.getElementById('box-align')
changeBtn.addEventListener('click', function() {
    boxAlign.style.flexDirection = 'column'
})

let heading = document.getElementsByTagName('h1')[2];
heading.style.color = 'tomato';
heading.setAttribute('id', 'heading');

let content = document.getElementById('content');
let replaceBtn  = document.getElementById('replace-btn')
replaceBtn.addEventListener('click', function() {
    content.innerText = "Welcome to Elevation academy"
})

function timerFunction() {
    let hours           = document.getElementById('hours').getElementsByTagName('p');
    let minutes         = document.getElementById('minute').getElementsByTagName('p');
    let seconds         = document.getElementById('seconds').getElementsByTagName('p');

    const d = new Date();

    let hour = d.getHours();
    hours[0].innerText = hour % 12 || 12;

    let min = d.getMinutes();
    minutes[0].innerText = min;

    let sec = d.getSeconds();
    seconds[0].innerText = sec;
}

setInterval(function() {
    timerFunction();
},1000)

let selectYear = document.getElementById('select-year');

selectYear.addEventListener('change', function(event) {
    let selectedYear = document.getElementById('selected-year');
    selectedYear.innerText = event.target.selectedOptions[0].text;
})
