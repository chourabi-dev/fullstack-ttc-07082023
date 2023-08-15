import { useState } from "react"; // useState => react Hook => super powers !!!

export default function Switch(props){
    // NEVER EDIT PROPS 


    let [ etat,changeEtat ] = useState(props.value);

    

    return(
        <div>
            <button  onClick={ ()=>{  changeEtat( ! etat )  } }  >  { etat == false? 'Off':'On' }  </button>
        </div>
    );
}