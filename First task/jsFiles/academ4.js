function factorial() {
    let inptVal = inpt.value;
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

let but = document.getElementById("but1");
let inpt = document.getElementById("check");

but.addEventListener("click", function() {
    factorial();
});