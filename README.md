## Introduce add event listener

- Add a button
- Click on the button and do an alert

```javascript
var myButton = document.querySelector('#clickMe');

myButton.addEventListener('click', doSomething);

function doSomething() {
        alert("Hello!");
}

//can also show the mouseover event
myButton.addEventListener('mouseover', doSomething);
```
 
- Solo exercise time: Do the first exercise in the main repo

## Retrieving elements and changing styles on them

- Use the document to get the div with the green background and change its background color

```javascript
function doSomething() {
        var box = document.querySelector('#box');
        box.style.backgroundColor = "blue";
}
```
- Solo exercise time: Do the second exercise in the main repo

## Adding new elements to a div

- Add a new paragraph to the div and give it some text using **innerText**

```javascript
function doSomething() {
        var box = document.querySelector('#box');
        box.style.backgroundColor = "blue";

        var paragraph = document.createElement('p');
        paragraph.innerText = "SHOW ME MORE JAVASCRIPT!!";
        box.appendChild(paragraph);
}
```
- Solo exercise time: Do the third exercise from the main repo

### Working with arrays of elements

```js
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
```

### Getting the text from an input box

```js
var updateTitleBtn = document.querySelector('#updateTitleBtn');

updateTitleBtn.addEventListener('click', function() {
    var inputBox = document.querySelector('#titleInput');
    var title = inputBox.value;

    var titleElement = document.querySelector('#lessonTitle');
    titleElement.innerText = title;
    inputBox.value = title;
});
```
