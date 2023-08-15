import { useState } from "react";

export default function MoreLess(props){

    const [ count, changeCount ] = useState(100)

    const [ etat,changeEtat ] = useState( true )

    return(
        <div>
            <p onDoubleClick={ ()=>{
                
                changeCount( etat == true ? props.content.length : 100 );
                changeEtat(! etat)

            } } >
                { props.content.substr(0,count) } <span style={{ color:'blue' }} >{ etat==true ? 'read more':'read less' }</span>
            </p>
        </div>
    );
}