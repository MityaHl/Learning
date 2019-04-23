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


$('#but1').click(function() {
    let arr = $('#textarea').val().split(' ').sort();
    let value = $('#check').val();
    binarySearch(value, arr);
});