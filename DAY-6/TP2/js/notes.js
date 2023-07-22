const noteElement = document.getElementById("note");
const resElement = document.getElementById("res");


var notes = [];


function add(){
                                  // GET
    const note = Number(noteElement.value);

    notes.push(note);

    noteElement.value = '';

}


function somme(){
    let sum = 0;
    /*for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

         // sum = sum + note;
        sum += note;
        
    }*/
    notes.map( (tmp)=>{
        sum = sum + tmp;
    })
    return sum;

}


function moy(){

    const s = somme();
    let moy = s / notes.length;
    resElement.innerText = moy;
}

// add bootstrap

// add result !!  < 10 == 10 >= 10