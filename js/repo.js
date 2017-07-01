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

// Math.floor(Math.random() * students.length);

function doSomething() {
    var studentsContainer = document.querySelector('#students');
    for(var i=0; i<students.length; i++) {
        var name = students[i];
        var paragraph = document.createElement('p');
        paragraph.innerText = name;
        studentsContainer.appendChild(paragraph);
    }

}

var pickRandom = document.querySelector('#secondButton');
pickRandom.addEventListener('click', selectRandom);

function selectRandom() {
    var students = document.querySelectorAll('p');
    for(var i=0; i<students.length; i++) {
        students[i].style.backgroundColor = "white";
    }
    var randomStudent = Math.floor(Math.random() * students.length);

    students[randomStudent].style.backgroundColor = "red";
}
