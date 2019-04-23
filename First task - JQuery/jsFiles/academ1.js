function isPalindrom() {
    let palindrom = $('#check').val();
    if(palindrom == palindrom.split('').reverse().join('')) {
        alert("Палиндром");
    } else {
        alert("Не палиндром");
    }
}

$('#but1').click(function() {
    isPalindrom();
});