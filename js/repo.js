var updateTitleBtn = document.querySelector('#updateTitleBtn');

updateTitleBtn.addEventListener('click', function() {
    var inputBox = document.querySelector('#titleInput');
    var title = inputBox.value;

    var titleElement = document.querySelector('#lessonTitle');
    titleElement.innerText = title;
    inputBox.value = title;
});


var myButton = document.querySelector('#clickMe');
myButton.addEventListener('click', doSomething);

function doSomething() {
    var cities = [
        'Glasgow',
        'Edinburgh',
        'Stirling'
    ];
    var container = document.querySelector('#box');
    cities.forEach(function(city) {
        var paragraph = document.createElement('p');
        paragraph.innerText = city;
        container.appendChild(paragraph);
    })

}

var secondBtn = document.querySelector('#secondButton');

secondBtn.addEventListener('click', function() {
    var cities = document.querySelectorAll('p');

    cities.forEach(function(cityElement) {
        cityElement.style.fontSize = "1.5em";
    });
});
