const formElement = document.getElementById("form");
const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");


formElement.addEventListener("submit",function(event){
    event.preventDefault();


    /*if ( usernameElement.value == '' ) {
        usernameElement.className="form-control is-invalid"
        
    } else {
        usernameElement.className="form-control is-valid"
        
    }


    if ( passwordElement.value == '' ) {
        passwordElement.className="form-control is-invalid"
        
    } else {
        passwordElement.className="form-control is-valid"
        
    }*/


    const controls = document.getElementsByClassName("form-control");

    for (let i = 0; i < controls.length; i++) {
        const input = controls.item(i);

        if (input.value == '') {
            input.className="form-control is-invalid"
        }else{
            input.className="form-control is-valid" 
        }
        
    }



})