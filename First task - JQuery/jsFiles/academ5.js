function isPrime() {
    let val = $('#check').val();
    var i, max;
    
    if (val < 2 || val % 2 === 0 && val !== 2) {
        alert("Не является");
        return false;
    }
    
    max = Math.round(Math.sqrt(val)) + 1;
    
    for (i = 3; i < max; i += 2) {
        if (val % i === 0) {
            alert("Не является");
            return false;
        }
    }
    alert("Является.");
    return true;
}

$('#but1').click(function() {
    isPrime();
});