import { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";

export default function UsersPage(){
    
    const [users,changeUsers] = useState([]);
    const [loading,changeLoading] = useState(false);
    const [error,changeError] = useState("");
    
    
    // HTTP 


    function getDataFromServer(){
        changeLoading(true);
        changeError("")



        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result)

                changeUsers(result);

            })
            .catch(error =>{
                changeError("Something went wrong, please try again.")

            }).finally(()=>{
                changeLoading(false);
            })
    }


    useEffect(()=>{
        getDataFromServer();
    },[])



    
    return(
        <div>
            <Navbar/>
            
            <h1 className="text-center">Users list</h1>


            <div className="container mt-5">

                        
                    {
                        loading == true ?
                        <div className="text-center">
                            <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    : null
                    }


                    {
                        error != '' ?
                        <div className="error-bloc">
                            <div className="alert alert-danger">
                                {error}. <span className="text-primary" onClick={()=>{ getDataFromServer() }} >refresh</span>
                            </div>
                        </div>
                    :
                    null


                    }

                    <div className="row">
                        {
                            users.map((u)=>{
                                return <div className="col-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>{u.name}</h3>
                                            <p className="text-muted">{u.email}</p>
                                        </div>
                                    </div>
                                </div>

                            })
                        }
                    </div>
                    
                    
            </div>

        </div>
    );
}