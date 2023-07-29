const todoElement = document.getElementById("todo");
const contentElement = document.getElementById("content");



var todos = [];

function addTodo(){
    // get the value from the input !!

    const todo  = {
        text:todoElement.value,
        createdAt: new Date()
    };

    todos.push( todo );


    // reset input !!

    todoElement.value = "";


    // show data
    displayData();

}


function deleteTodoByIndex(i){
    
    todos.splice(i,1);
    
    displayData();
}


function displayData(){


    let htmlFINAL = '';

    todos.map((t,index)=>{
    const htmlBLOC =   `<li>
                            <strong>${ t.text }</strong> <br>
                            <small class="text-muted">${ t.createdAt }</small><br>

                            <button class="btn btn-sm btn-danger" onclick="deleteTodoByIndex(${index})" >delete</button>
                        </li>`; 
        htmlFINAL = htmlFINAL + htmlBLOC;
    })


    contentElement.innerHTML = htmlFINAL;




}