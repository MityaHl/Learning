let area = document.getElementById("textarea");

function minMax() {
    let arr = area.value.split(' ');
    arr.sort();
    alert("min:" + arr[0]);
    alert("max:" + arr[arr.length-1]);
}

let but = document.getElementById("but1");

but.addEventListener("click", function() {
    minMax();
});