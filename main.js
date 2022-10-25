// Part One - Querying DOM Elements

let unorderedList = document.querySelector('#arguments');
lineThroughListItem(unorderedList);

imageUpdate("image-1","https://image.shutterstock.com/image-photo/background-elephant-600w-133689230.jpg");
imageUpdate("image-2","https://image.shutterstock.com/image-photo/great-white-shark-showing-teeth-600w-397799335.jpg");
imageUpdate("image-3","https://image.shutterstock.com/image-photo/wild-african-cheetah-beautiful-mammal-600w-319654835.jpg");

removeArgumentsListItem();
removeArgumentsListItem();

changeFontSize("x-large", "thing-1");

/////////////////////////////////////////////////
// Part Two - DOM Elements as Function Parameters

appendElement("img");
changeImageSize("img");
invisibleClass("img");

/////////////////////////////////////////////////
// Part Three - Creating DOM Elements





/*

My functions are below

*/
/////////////////////////////////////////////////
// Part One
// Line through function
function lineThroughListItem(list){
    let item1 = document.querySelector('li');   
    item1.style.textDecoration = "line-through";
}

// Image function
function imageUpdate(str, url){
    let idString = `#${str}`;
    let myImage = document.querySelector(idString);
    myImage.src = url;
}

// Removes arguments li
function removeArgumentsListItem(){
    let unorderedList = document.querySelector('#arguments');
    unorderedList.removeChild(unorderedList.firstElementChild);
}

// Changes font size
function changeFontSize(size, id){
    let idString = document.querySelector(`#${id}`);
    idString.style.fontSize = size;
 
}
/////////////////////////////////////////////////
// Part Two
// Appends element to #arguments
function appendElement(str){
    let element = `${str}`
    let newElement = document.createElement(element);
    unorderedList.appendChild(newElement);
}

// Changes image height to 30px
function changeImageSize(image){
    let element = `${image}`
    let myImage = document.querySelector(element);
    myImage.style.height = "30px";
    
}

// Makes element class invisible
function invisibleClass(elementStr){
    let element = `${elementStr}`;
    let myElement = document.querySelector(element);
    myElement.className = "invisible";
}
/////////////////////////////////////////////////
// Part Three
//