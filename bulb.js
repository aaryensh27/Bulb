let body = document.body;

let image = document.createElement("img");
image.setAttribute("src","./lightbulb-OFF.png")
body.appendChild(image);
console.log(image);

let Button = document.createElement("button");
Button.innerHTML ="ON";
Button.style.height = "30px";
Button.style.width = "30px";

body.appendChild(Button);
console.log(Button);

Button.addEventListener("click",() =>
{
 if(Button.innerHTML=="ON")
    {
        image.setAttribute("src","./lightbulb-ON.png")
        image.style.height = "500px";
        image.style.width = "350px";
        body.appendChild(image);
        Button.innerHTML="OFF";
    }
    else{
        image.setAttribute("src","./lightbulb-OFF.png")
        image.style.height = "500px";
        image.style.width = "450px";
        body.appendChild(image);
        Button.innerHTML="ON";
    }
})


