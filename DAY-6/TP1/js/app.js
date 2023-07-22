// console.log("hello world")

/*
var title = "bonjour";

{
    let username="demo";

}
const pi = 3.14;



// window
console.log(window);

// document


console.log(document);*/


// types of vars !!

/*
console.log(  typeof "bonjour"  );
console.log(  typeof "c"  );
console.log(  typeof 4  );
console.log(  typeof 3.14  );
console.log(  typeof 256232326232654548848  );

console.log(  typeof NaN  );
console.log(  typeof true  );
console.log(  typeof [12,19,16,30,50]  );
console.log(  typeof new Date()  );
console.log(  typeof {}  );*/



// somme !!

/*
var x;

var y

var s;


x = 5;

y = 20;

s = x + y;

console.log( "la somme de x + y = "+s );




                             //  SET  and GET
document.getElementById("res").innerText = s;


console.log( document.getElementById("res").innerText  );



console.log( document.getElementById("x").value  );*/


const xElement = document.getElementById("x");
const yElement = document.getElementById("y");
const resElement = document.getElementById("res");

const errorXElement = document.getElementById("errx");
const errorYElement = document.getElementById("erry");




/** CONDITONS
 * 
 * if (condition) {
    
}else{

}



if (condition) {
    
} else if( ){
    
}else if(){

}else{
    
}
 */




function somme(){
    // test if x.value != ''

    if ( xElement.value != '' ) {
        errorXElement.innerText="" 
    }else{ 
        errorXElement.innerText="This feild is required"
    }



    if ( yElement.value != '' ) {
        errorYElement.innerText="" 
    }else{ 
        errorYElement.innerText="This feild is required"
    }



    if (yElement.value != ''   &&  xElement.value != '' ) {
        
        // string        // string
        var s = Number(xElement.value) + Number(yElement.value);
        resElement.innerText = s;


    }










}






