var pDemo = document.getElementById("demo")
pDemo.innerHTML = "Hello World"
// document.getElementsByClassName("demo2").innerHTML = "HAHAHA"
// document.getElementsByTagName("p")

document.getElementById("img").src = "https://images.unsplash.com/photo-1544393064-a21fdbb412a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2801&q=80"
pDemo.style.color = "red"

//Event Handlers
//onClick = js
// element.addEventListener(event,function, useCapture)
// element.addEventListener("click", function(){
//     do something
// })
var colors = ["red", "#E8340C", "blue", "orange"]
var btn = document.getElementById("btn")

btn.addEventListener("click", changeColor)

function changeColor(){
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

// Scope

var foo = 'bar'; //global

function someFunction(params1, param2){ //params1 and params2 are local variables
    var bar = 'foo' // This is now a local variable
}

function myFunction(){
    // debugger
    console.log(bar) // This will give us an error
    console.log(foo) // This will give us 'bar'
}

function whatIsThis(){
    baz = "what variable is this?"
}
// console.log(baz)  // This gives you a reference error, because the variable is local

whatIsThis()
console.log(baz) // This runs