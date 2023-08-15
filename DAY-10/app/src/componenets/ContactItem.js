export default function ContactItem(props){


    console.log(props);


    /**
     *    let classCss = '';

        if (props.old == true) {
            classCss= "old"
        }else{
            classCss= "new"
        }
    */
    
        
    return(
        <div>
            <h3 className={ props.old == true ? 'old ' : 'new' } >{props.fullname}</h3>
            <p>{props.email}</p>
        </div>
    );
}


