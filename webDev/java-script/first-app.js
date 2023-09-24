let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let total 0;
function increament()
{
count += 1;
total += 1;
countEl.innerHTML= count;

}
function save()
{
    saveEl.innerHTML += " " + count + "-";
    totalEl.innerHTML = total;
    count=0;

}