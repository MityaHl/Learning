let area = document.getElementById("textarea");
let but = document.getElementById("but1");
let inpt = document.getElementById("check");

function binarySearch(value, arr) {
    let first = 0;    
    let last = arr.length - 1;   
    let middle;
    let found = false;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (arr[middle] == value) {
            alert("Элемент найден, его индекс в отсортированном массиве:" + middle);
            found = true;
        } else if (arr[middle] > value) { 
            last = middle - 1;
        } else {  
            first = middle + 1;
        }
    }
    if(!found) {
        alert("Элемент не найден");
    }
}


but.addEventListener("click", function() {
    let arr = area.value.split(' ').sort();
    let value = inpt.value;
    binarySearch(value, arr);
});