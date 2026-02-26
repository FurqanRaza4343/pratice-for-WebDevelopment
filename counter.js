let count = 0;

let countdisply = document.getElementById("count");
let incbtn = document.getElementById("increment");
let decbtn = document.getElementById("decrement");

incbtn.onclick = function () {
    // count = count + 1;
    // count++;
    // count += 1;

    count++;
    countdisply.innerHTML = count;
}

decbtn.onclick = function () {
    // count = count - 1;
    // count--;
    // count -= 1;

    count--;
    countdisply.innerHTML = count;
}
