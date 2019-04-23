function factorial() {
    let inptVal = $('#check').val();
    if(inptVal == 0 || inptVal == 1) {
        var fact = 1;
    } else {
        var fact = parseInt(inptVal);
        for(var i = 1; i < inptVal; i++) {
            fact *= i;
        }
    }
    alert(fact);
}

$('#but1').click(function() {
    factorial();
});