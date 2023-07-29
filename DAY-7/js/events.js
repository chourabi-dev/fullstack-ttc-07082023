/**
 * const zoneTextEelement = document.getElementById("zone-text");
const statusElement = document.getElementById("status");

// add event listner !!!

zoneTextEelement.addEventListener("keyup",function(event){
    
    console.log(event);

    statusElement.style.display="block"

    if (event.code == 'Enter') {
        statusElement.style.display="none"
        zoneTextEelement.value=''
    }


})
 */



/*
const feildElement = document.getElementById("feild");
const ballElement = document.getElementById("ball");



feildElement.addEventListener("mousemove",function(event){
    console.log(event);

    ballElement.style.top = event.clientY+'px';
    ballElement.style.left = event.clientX+'px';
    
})*/




const btn = document.getElementById("btn");

 


btn.addEventListener("click",function(){
    console.log("clicked !!!");
})