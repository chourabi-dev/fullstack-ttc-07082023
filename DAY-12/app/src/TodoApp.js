import { useState } from "react";

export default function TodoApp(){


    const [ value,changeValue ] = useState("");

    
    const [ todos, changeTodos ] = useState( [ "create a react app",'bonjour' ] );



    return(
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <ul>
                        {
                            todos.map((t,index)=>{
                                return( <li key={index} >{t}</li> );
                            })
                        }
                    </ul>
                </div>
                <div className="card-footer">
                    <div className="d-flex">
                        <div className="w-100">
                            <input type="text" className="form-control w-100" 
                            
                            value={ value }  
                            
                            onChange={(event)=>{  changeValue(event.target.value)   }}     />
                        </div>
                        <div>
                            <button className="btn btn-primary"
                            
                            onClick={ ()=>{

                                  if( value != '' ){
                                    
                                    changeTodos(   old => [...old,value]   );

                                    
                                    
                                    changeValue("");
                                    
                                  }
                                  

                            } }
                            
                            >Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}