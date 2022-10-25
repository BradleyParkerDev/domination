
let unorderedList = document.querySelector('#arguments');
lineThroughListItem(unorderedList);


function lineThroughListItem(list){
    let item1 = document.querySelector('li');   
    item1.style.textDecoration = "line-through";
}