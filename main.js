/////////////////////////////////////////////////
// Part One - Querying DOM Elements
/////////////////////////////////////////////////
let unorderedList = document.querySelector('#arguments');
lineThroughListItem(unorderedList);
imageUpdate("image-1","https://image.shutterstock.com/image-photo/background-elephant-600w-133689230.jpg");
imageUpdate("image-2","https://image.shutterstock.com/image-photo/great-white-shark-showing-teeth-600w-397799335.jpg");
imageUpdate("image-3","https://image.shutterstock.com/image-photo/wild-african-cheetah-beautiful-mammal-600w-319654835.jpg");
removeArgumentsListItem();
removeArgumentsListItem();
changeFontSize("x-large", "thing-1");
/////////////////////////////////////////////////



/////////////////////////////////////////////////
// Part Two - DOM Elements as Function Parameters
/////////////////////////////////////////////////
let newImage = document.createElement('img');
appendElement(newImage);
let image3 = document.querySelector('#image-3')
changeImageSize(image3);
let image2 = document.querySelector('#image-2')
invisibleClass(image2);
/////////////////////////////////////////////////



/////////////////////////////////////////////////
// Part Three - Creating DOM Elements
/////////////////////////////////////////////////
//The first function call of part three is under its definition, below.
let myHeader = newHeader("3", "My New Header");
appendElement(myHeader);
/////////////////////////////////////////////////



/*

My functions are below.

*/



/////////////////////////////////////////////////
// Part One - Functions
/////////////////////////////////////////////////
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



/////////////////////////////////////////////////
// Part Two - Functions
/////////////////////////////////////////////////
// Appends element to #arguments
function appendElement(newElement){
    unorderedList.appendChild(newElement);
}

// Changes image height to 30px
function changeImageSize(myImage){
    myImage.style.height = "30px";
}

// Makes element class invisible
function invisibleClass(myElement){
    myElement.className = "invisible";
}
/////////////////////////////////////////////////



/////////////////////////////////////////////////
// Part Three - Functions
/////////////////////////////////////////////////
// The function returns a <li>
function liFunct(myStr){
    let listItem = document.createElement('li');
    listItem.innerText = myStr;
    return listItem;
}
// liFunct() call
let newLi = liFunct("New List Item");
appendElement(newLi);
//The function creates a new header 
function newHeader(size, text){
    let headerSize = `h${size}`
    let header = document.createElement(headerSize);
    header.innerText = text;
    return header;
}
/////////////////////////////////////////////////
