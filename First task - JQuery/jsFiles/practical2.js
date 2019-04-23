function hasString(arr, arr1, arr2, str) {
    for(let key in arr) {
        if(arr[key].indexOf(str) != -1) {
            arr1.push(arr[key]);
        } else {
            arr2.push(arr[key]);
        }
    }
}

$('#but1').click(function() {
    let arr1 = [];
    let arr2 = [];
    let arr = $('#textarea').val().split(' ');
    let str = $('#check').val();
    hasString(arr, arr1, arr2, str)
    alert("Массив который содержит подстроки " + arr1);
    alert("Массив который не содержит подстроки " + arr2);
});