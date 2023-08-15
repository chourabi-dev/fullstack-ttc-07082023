import { useState } from "react";

export default function Article(props){

    const [like,changeLike] = useState(false);
    const [likes,chnageLikes] = useState(props.likes);

    return(
        <div>
            <h3>{props.title}</h3>
            <p>
                {props.content}
            </p>
            <button onClick={ ()=>{ 
                
                changeLike(! like);

                if( like == false ){
                    chnageLikes( (likes+1) )
                }else{
                    chnageLikes( (likes-1) )
                }

             } } >{likes}  { like == false ? 'Like':'Dislike' } </button>
        </div>
    );
}