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

## Discuss the "document" object

Discuss how it's not a magical syntax, but it's actually a plain object created by the browser, with some properties, some of them pointing to functions. 

## Combining a for loop with adding new elements

- Work with them, to use the array of student names, and add each name as a new paragraph inside my div when the first button is clicked
- Then there should be a second button, that when clicked:
 - retrieves all the p tags added by the previous button
 - generates a random index
 - it changes the background color of the **p** element with that index

- This was a live coding exercise, and I had 4-5 of them come up and code live
- Everybody was helping the person writing the code, and in the end we built a small app that was selecting random student names (which might be a fun way in the future to encourage people to contribute when nobody wants to answer)

- Solo exercise time: Continue with the next exercise in the main repo 

## Using class name over changing styles explicitly

- Change the previous implementation, so instead of applying a different bgr color explicitly, it just changes the className
 
```javascript
function doSomething() {
        var box = document.querySelector('#box');
        box.className = "blue";
}
```

- Solo exercise time: Go back to where you were changing the background color of the jumbotron and apply a new className instead of changing the background color

## Inputs

- I didn't get to this part, we moved on to AJAX, but they did the homework part that involves inputs
- This will need setting up in "demo.html"
- Add input, introduce keyup event
- Get the first P tag and change its inner text to whatever is in the input
- When you press the button, delete the text from the both the input and P

- Solo exercise time: continue with final exercise from the main repo