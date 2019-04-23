let area = document.getElementById("textarea");
let inpt = document.getElementById("check");

function hasString(arr, arr1, arr2, str) {
    for(let key in arr) {
        if(arr[key].indexOf(str) != -1) {
            arr1.push(arr[key]);
        } else {
            arr2.push(arr[key]);
        }
    }
}

let but = document.getElementById("but1");

but.addEventListener("click", function() {
    let arr1 = [];
    let arr2 = [];
    let arr = area.value.split(" ");
    let str = inpt.value;
    hasString(arr, arr1, arr2, str)
    alert("Массив содержащий подстроки " + arr1);
    alert("Массив не содержащий подстроки " + arr2);
});