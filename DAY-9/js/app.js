var categories = [
    { id:1, name:"Electronics" },
    { id:2, name:"Smart phones" },
    { id:3, name:"TV" },
    
    
]

var produits = [
    { id:1, name:"HP pavillion" , category:1, price:2300, photoURL:'https://th.bing.com/th/id/R.a9c34fb8f2688cb6e2d73085f9310aeb?rik=nboa4bDgfjsVgA&riu=http%3a%2f%2fvaluenomad.com%2fwp-content%2fuploads%2f2018%2f01%2fhp-pavilion-15-cc110na.jpg&ehk=bVzaOB7yQdbw4OZ%2f%2fTtnIgWtp3anoY1SdbNpxNXa2XY%3d&risl=&pid=ImgRaw&r=0' },
    { id:2, name:"Samsung s21" , category:2, price:4300, photoURL:'https://th.bing.com/th/id/R.8e0d7c225cc601e0eed3d26580d1fb70?rik=jHl5zanv5dmayg&pid=ImgRaw&r=0' },
    { id:3, name:"LG smart TV" , category:3, price:1800, photoURL:'https://rukminim1.flixcart.com/image/1664/1664/television/k/x/z/lg-43lh576t-original-imaejnzc6pdxgqkk.jpeg?q=90' },
    
    
];

/*

<div class="col-sm-4">
                                <div class="card w-100">
                                    <img src="..." class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Card title</h5>
                                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                  </div>
                            </div>


                            

                            <div class="col-sm-12">
                                <div class="card w-100">
                                    
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div>
                                                <img src="..." class="card-img-top" alt="...">
                                            </div>
                                            <div>
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                     
                                    </div>
                                  </div>
                            </div>
                            
 */




const productsBlocElement = document.getElementById("products-bloc");
const gridBTN = document.getElementById("grid-btn");
const listBTN = document.getElementById("list-btn");
const selectElement = document.getElementById("categories-list");
const keySearchElement = document.getElementById("key-search");
const priceElement = document.getElementById("price");




var modeAffichage = 0; // 0 => grid   1 => list


gridBTN.addEventListener("click",function(){
    modeAffichage = 0;
    gridBTN.className="btn btn-dark"
    listBTN.className="btn btn-outline-dark"
    affichage();
})


listBTN.addEventListener("click",function(){
    modeAffichage = 1;
    listBTN.className="btn btn-dark"
    gridBTN.className="btn btn-outline-dark"

    affichage();
})



function getCtegroryNameById(id){

    let str = "";


    categories.map((c)=>{
        if (c.id == id) {
            str = c.name;
        }
    })



    return str;
}



function getMaxProductPrice(){
    let max = 0;

    produits.map((p)=>{
        if( p.price > max ){
            max = p.price;
        }
    })

    return max;
}




function affichage(){

    let blocHTML = '';


    

    const keys = keySearchElement.value.toLowerCase();
    const tmpPRICE = Number(priceElement.value);
    const categoryValue = selectElement.value;
    

    console.log(tmpPRICE);


    let price =  ((tmpPRICE * getMaxProductPrice())  /  100);

 

    produits.filter(




            (p)=>{

                if (categoryValue=='') {
                    return ( (p.name.toLowerCase().indexOf( keys ) != -1)  && ( p.price <= price ) )

                } else {
                    return ( (p.name.toLowerCase().indexOf( keys ) != -1)  && ( p.price <= price ) && ( p.category == categoryValue ) )

                }
            }

    ).map((p)=>{
        if (modeAffichage==0) {
            blocHTML = blocHTML + `
            <div class="col-sm-4">
                <div class="card w-100">
                    <img src="${p.photoURL}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${p.name} $</h3>
                        <h5 class="card-title">${p.price} $</h5>
                        <p class="card-text">${getCtegroryNameById(p.category)}</p>
                    </div>
                    </div>
            </div>
            `;
        } else {
            

            blocHTML = blocHTML + `
            <div class="col-sm-12">
                                <div class="card w-100">
                                    
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div style="width:200px">
                                                <img src="${p.photoURL}" class="card-img-top w-100" alt="...">
                                            </div>
                                            <div>
                                            <h3 class="card-title">${p.name} $</h3>
                                            <h5 class="card-title">${p.price} $</h5>
                                                <p class="card-text">${getCtegroryNameById(p.category)}</p>
                                            </div>
                                        </div>
                                     
                                    </div>
                                  </div>
                            </div>
            `;
        }
    })


    productsBlocElement.innerHTML= blocHTML;




}



function initCategories(){
    let blocHTML = '<option value="" >All</option>';

    categories.map((c)=>{
        blocHTML = blocHTML + `<option value="${c.id}" >${c.name}</option>`
    })


    selectElement.innerHTML = blocHTML;
}






keySearchElement.addEventListener("keyup",function(event){

    affichage();
})


priceElement.addEventListener("change",function(event){

    affichage();
})


selectElement.addEventListener("change",function(event){

    affichage();
})











affichage();
initCategories();