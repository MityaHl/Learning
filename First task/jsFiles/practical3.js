let area = document.getElementById("textarea");
let inpt = document.getElementById("check");
let limit = document.getElementById("limit");

function prices(arr, lim, sale) {
    let sum = 0, saleSum = 0, checkSum = 0;
    for(let key in arr) {
        sum += +arr[key];
        saleSum += +arr[key] * (100-sale)/100;
        if(arr[key] >= lim) {
            checkSum += +arr[key] * (100-sale)/100; 
        } else {
            checkSum += +arr[key];
        }
    }
    alert("Сумма цен " + sum + " Сумма цен со скидкой " + saleSum + " Сумма цен со скидкой с лимитом " + checkSum);
}

let but = document.getElementById("but1");

but.addEventListener("click", function() {
    let arr = area.value.split(" ");
    let sale = +inpt.value;
    let lim = +limit.value;
    prices(arr, lim, sale);
});