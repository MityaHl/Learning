let inpt = document.getElementById("check");

function isPalindrom() {
    let palindrom = inpt.value;
    if(palindrom == palindrom.split('').reverse().join('')) {
        alert("Палиндром");
    } else {
        alert("Не палиндром");
    }
}

let but = document.getElementById("but1");

but.addEventListener("click", function() {
    isPalindrom();
});