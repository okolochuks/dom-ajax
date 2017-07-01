var myButton = document.querySelector('#clickMe');
myButton.addEventListener('click', doSomething);

var students = [
    'Habiiba',
    'Anthony',
    'Simon',
    'Mohammed Dwina',
    'Etzali',
    'Hervin',
    'Jamal',
    'Khaled Karaz',
    'Khaled Yaseen',
    'Mohamad Rateb',
    'Nasir',
    'Won',
    'Yohannes'
];

var secondButton = document.querySelector('#secondButton');
secondButton.addEventListener('click', pickrandom);

function pickrandom() {
    var allPragraph = document.querySelectorAll('p');
    for (var i = 0; i < allPragraph.length; i++) {
        allPragraph[i].style.backgroundColor = 'white';
    }

    var index = Math.floor(Math.random() * allPragraph.length);
    var achildBack = allPragraph[index];
    achildBack.style.backgroundColor = 'pink';
}

function doSomething() {
    var box = document.querySelector('#box');
    // box.style.backgroundColor = "blue";
    box.className = "blue";
}

// box.className += " red"

for (i=0; i < writers.length; i++){
    var writer = writers[i];
    if (writer.alive === true) {
        console.log("Hi, my name is " + writer.firstName + " " + writer.lastName + ". I am " + writer.age + " years old and work as a " + writer.occupation);
    }
 }
