var myButton = document.querySelector('#clickMe');
myButton.addEventListener('click', doSomething);

function doSomething() {

    var students = [
        'Glasgow',
        'Edinburgh',
        'Stirling'
    ];

    var container = document.querySelector('#students');

    students.forEach(function (student) {
        var p = document.createElement('p');
        p.innerText = student;
        p.style.marginLeft = "0px";        
        container.appendChild(p);
    }); 
}

var changeBgrBtn = document.querySelector('#secondButton');
changeBgrBtn.addEventListener('click', changeBgr);

function changeBgr() {
    document.querySelectorAll('p')
        .forEach(paragraph => {
            paragraph.style.marginLeft = parseFloat(paragraph.style.marginLeft) + 10 + "px";
        });
}