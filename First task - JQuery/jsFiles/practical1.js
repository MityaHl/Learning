function countNums(arr) {
    let countObj = {};
    for(let key in arr) {
        if(countObj[arr[key]]){
            countObj[arr[key]] += 1;
        } else {
            countObj[arr[key]] = 1;
        }
    }
    for(let key in countObj) {
        alert("Число " + key + " повторяется " + countObj[key] + " раз(а)");
    }
}

$('#but1').click(function() {
    let arr = $('#textarea').val().split(' ');
    countNums(arr);
});