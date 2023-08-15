import { useParams } from "react-router-dom";
import Navbar from "../componenets/Navbar";

export default function UserDetailsPage(){

    const params= useParams();


    console.log(params);


    return(
        <div>
            <Navbar/>
            
            <h1 className="text-center">Loading users N° { params.id }</h1>
        </div>
    );
}