let area = document.getElementById("textarea");

function countNums(arr) {
    let countObj = {};
    for(let key in arr) {
        if(countObj[arr[key]]){
            countObj[arr[key]] += 1;
        } else {
            countObj[arr[key]] = 1;
        }
    }
    for(let key in countObj) {
        alert("Число " + key + " повторяется " + countObj[key] + " раз(а)");
    }
}

let but = document.getElementById("but1");

but.addEventListener("click", function() {
    let arr = area.value.split(" ");
    countNums(arr);
});