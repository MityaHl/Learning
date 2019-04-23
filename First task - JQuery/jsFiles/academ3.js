function fibonachi() {
    let num = $('#check').val();
    let arr = [1,1];
    if(num > 2){
        for(let i = 2; i < num; i++) {
            let sum = arr[i-1] + arr[i-2];
            arr.push(sum);
        }
    }
    if(num == 1) {
        alert(arr[0]);
    } else {
        alert(arr);
    }
}

$('#but1').click(function() {
    fibonachi();
});