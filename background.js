var button1=document.createElement("button")
button1.setAttribute("id","button-1");
button1.setAttribute("class","button-1");

button1.innerHTML="Clikc to make button the background yellow";

button1.addEventListener("click",function(){
    document.getElementById("okey").style.background="yellow";
})



document.body.appendChild(button1);




var button2=document.createElement("button")
button2.setAttribute("class","button-2");

button2.innerHTML="Click to make button the background green";

button2.addEventListener("click",function(){
    document.getElementById("okey").style.background="green";
})

document.body.appendChild(button2);

