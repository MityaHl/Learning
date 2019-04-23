function minMax() {
    let arr = $('#textarea').val().split(' ');
    arr.forEach(element => {
        parseInt(element);
    });
    arr.sort();
    alert("min:" + arr[0]);
    alert("max:" + arr[arr.length-1]);
}

$('#but1').click(function() {
    minMax();
});