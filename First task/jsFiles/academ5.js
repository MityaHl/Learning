function isPrime() {
    let val = inpt.value;
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

let but = document.getElementById("but1");
let inpt = document.getElementById("check");

but.addEventListener("click", function() {
    isPrime();
});