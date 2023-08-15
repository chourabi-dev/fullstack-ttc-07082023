import { useState } from "react";

export default function SiginBloc(){


    const [username,changeUsername] = useState("");
    const [password,changePassword] = useState("");
    const [ messageInfoUsername,changeMessageInfoUsername ] = useState("");
    const [ btn,changeBtn ] = useState(false);

    function connect(){
        console.log(username,password);

        if( username.length <= 5 ){
            changeMessageInfoUsername("This feild must be longer than 5 chars")
        }


        changeBtn(true);
    }



    return(
        <div className="container mt-5">
            <form  onSubmit={(event)=>{ event.preventDefault();   connect(); }}  >
                <div className="mb-3">
                    <label htmlFor="">Username</label>
                    <input type="text" className={  username == '' ? 'form-control is-invalid' : 'form-control is-valid'  } 
                    value={ username }
                    

                    onChange={ (event)=>{
                        changeUsername( event.target.value );
                    }}
                    
                    
                    />

                    <p>
                        <small className="text-danger">{ messageInfoUsername }</small>
                    </p>



                </div>
                <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input type="password" className={ password == '' ? 'form-control is-invalid': 'form-control is-valid' }
                     value={ password }
                     
                     onChange={ (event)=>{
                        changePassword( event.target.value );
                    }}
                    
                    
                     
                     />
                </div>
                <div className="mb-3">
                   
                   

                   {
                    btn == false ?

                    <button type="submit" 
                   className="btn btn-primary"
                   

                   disabled={  ( username =="" ) || (password=="")   }
                   
                   
                   
                   >Log in</button>


                   :

                   <p>
                        chargement...
                    </p>
                   }
                   
                   


                    



                </div>
                
                
            </form>
        </div>
        
    );
}