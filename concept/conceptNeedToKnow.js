/*
how to get nodeLIst:-
    .querySelectorAll("name of the attribute")

Converting a NodeList to an Array

// Get all buttons as a NodeList
var btns = document.querySelectorAll('button');

// Convert buttons NodeList to an array
var btnsArr = Array.prototype.slice.call(btns);

*/