const express = require('express')
const app = express()
const port = 8080
const url = require('url');


const parser = require("body-parser");


app.use( parser.json() );



app.get('/', (req, res) => {
  res.send('Hello World!')
})


// GET POST PUT DELETE


app.get("/student",   (req,res)=>{   

    res.send("student GET") 

})

app.post("/student",   (req,res)=>{   

    res.send("student POST") 

})

app.put("/student",   (req,res)=>{   

    res.send("student PUT") 

})

app.delete("/student",   (req,res)=>{   

    res.send("student DLETE") 

})




// TP 1 

// GET  params  X  Y  => ( x+y )

// http://localhost:port/path/path/path?key=value&key2=value2...


// http://loca&lhost:port/employees/dep5?year=2005


app.get("/somme",(req,res)=>{

    const queries = url.parse(req.url,true).query

    console.log(queries);
    //...

    const x = Number(queries.x);
    const y = Number(queries.y);
    const op = queries.op;
    

    if( op == "plus" ){

        res.send("Result : "+(x+y));
    }else if( op == "*" ){
        res.send("Result : "+(x*y));
    }else if(  op == "-" ){
        res.send("Result : "+(x-y));
    }else if( op == "/" ){
        res.send("Result : "+(x/y));
    }else{
        res.send("Op ( + - * /  )");
    }



})



// POST !!!
// { username email password }

app.post("/create-account",(req,res)=>{
    
    console.log(req.body.email);
    
    
    res.send("...");
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})