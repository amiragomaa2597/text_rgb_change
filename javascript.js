
const setchange = function ()
{

    console.log(red.value);
    console.log(green.value);
    console.log(blue.value);
    document.querySelector("p").style.color=`rgb(${red.value},${green.value},${blue.value})`;
}

window.addEventListener("load",function()
{
    let red = this.document.getElementById("red");
    let green = this.document.getElementById("green");
    let blue = this.document.getElementById("blue");

console.log(red.value);
console.log(green.value);
console.log(blue.value);


red.addEventListener("change", setchange,false);
blue.addEventListener("change", setchange,false);   
green.addEventListener("change", setchange,false);


});

