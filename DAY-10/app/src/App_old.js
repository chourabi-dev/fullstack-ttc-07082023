import ContactItem from "./componenets/ContactItem";



function getDate(){
  return new Date().getFullYear();
}


function somme(x,y){
  return( x+y );
}


function App() {

  let blocHTML = '<h1>bonjour</h1>';

  let blocJSX = <h1>Bonjour</h1>;

  let year = 2023;



  const contacts = [
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", old:true },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", old:true },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", old:false },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", old:true },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", old:true },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", old:true },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", old:false },
    
    
  ];


  return (
    <div>
        {
          /**
           *         { blocJSX }

        <p>
          {   55 * 10  }
        </p>


        <p>
          { blocHTML }
        </p>

        <p>
          this year : { getDate() }
        </p>
           */
        }



        {
          contacts.map((c,index)=>{
            return <ContactItem key={ index } old={ c.old } fullname={ c.fullname }  email={ c.email }  />

          })
        }
        






    </div>
  );
}

export default App;
