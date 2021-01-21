// DOM - document object model
// console.log(document.getElementsByTagName("h1"));

let a = document.getElementsByTagName("h1");
// console.log(a[0]);

// document.getElementsByTagName("h1")[0].innerText = "Hello world";

a[0].innerText = "<h2>Hello</h2>";
a[1].innerHTML = "<h2>Hello</h2><h2>Hello</h2>"; 
a[2].innerHTML = `
<h6>ya</h6>
<h6>ya</h6>
<h6>ya</h6>
<h6>ya</h6>
<h6>ya</h6>
`

// ElementById
let b = document.getElementById("puppy");
console.log(b);
// ElementsByClassName
let c = document.getElementsByClassName("description");
console.log(c);

// .style.<enter properties here>
b.style.color = "red";

function changeColor(){
    b.style.color = "blue";
}

// using setAttribute to place onclick listener
// b.setAttribute("onclick","alert('hi')");
b.setAttribute("onclick","changeColor()");