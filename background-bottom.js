var button3=document.createElement("button")
button3.setAttribute("class","button-3");
button3.innerHTML="Click to make button the background red";

button3.addEventListener("click",function(){
    document.getElementById("okey").style.background="red";
})

document.body.appendChild(button3);


var button4=document.createElement("button")
button4.setAttribute("class","button-4");
button4.innerHTML="Click to make button the background blue";

button4.addEventListener("click",function(){
    document.getElementById("okey").style.background="blue";
})

document.body.appendChild(button4);