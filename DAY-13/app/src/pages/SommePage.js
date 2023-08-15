import { useState } from "react";
import Navbar from "../componenets/Navbar";
import { Navigate } from "react-router-dom";

export default function SommePage(){

    const [x,changeX] = useState(0);
    const [y,changeY] = useState(0);
    

    const [go,changeGo] = useState(false);

    return(
        <div>

            {
                go == true ? 
                <Navigate to={ '/somme/result/'+(x+y) } replace={false} />

                :
                null
            }

            



            <Navbar/>



            
                <div className="container mt-5">

                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label htmlFor="">X</label>
                                <input type="text" className="form-control" value={x} onChange={(e)=>{changeX(Number(e.target.value))}} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Y</label>
                                <input type="text" className="form-control" value={y}  onChange={(e)=>{changeY(Number(e.target.value))}} />
                            </div>
                            <div className="mb-3">
                                {
                                    // <Link className="btn btn-primary" to={ '/somme/result/'+(x+y) } >Calculer</Link>
                                }
                               <button className="btn btn-primary" onClick={ ()=>{
                                
                                const s = x+y;


                                changeGo(true);
                                


                               } } >Calculer</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
        </div>
    );
}