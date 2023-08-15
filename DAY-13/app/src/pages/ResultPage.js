import { useParams } from "react-router-dom";
import Navbar from "../componenets/Navbar";

export default function ResultPage(){

    const params = useParams();

    return(
        <div>
            <Navbar/>
            
            <h1 className="text-center">Result : { params.result }</h1>
        </div>
    );
}