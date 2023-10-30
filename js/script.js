

document.getElementById("btn").addEventListener("click" , gridMaker);

const rowg = document.querySelector(".row");

const difficultyLevel = document.getElementById("difficultyLevel");

// funzione con difficoltà

function gridMaker() {
    let difficulty = difficultyLevel.value;
    let DimensioneGriglia;

    if (difficulty ==="easy") {
        DimensioneGriglia = 100; 
        squareClass = "square-easy";

    }else if (difficulty ==="medium") {
        DimensioneGriglia = 81;
        squareClass = "square-medium";

    }else if (difficulty ==="hard") {
        DimensioneGriglia = 49;
        squareClass = "square-hard";
    }

    rowg.innerHTML = "";
    
    const bombe = TheBomb(DimensioneGriglia);
    console.log(bombe);

    for (let i = 1; i <= DimensioneGriglia; i++) {
        let square = document.createElement("div");
        square.className = "square " + squareClass;

        // console.log(square);

        square.addEventListener("click", function(){
            colorSquare(square, i)
        })

        rowg.appendChild(square);
    }


}


// FUNZIONE:

// GRIGLIA

// function gridMaker() {
//     const rowg = document.querySelector(".row");
//     rowg.innerHTML= "";


//     for (let i = 1; i <= 100; i ++) {
//         let square = document.createElement("div");
//         square.className= `square`;
        
    
//         console.log(square);

//         square.addEventListener("click", function(){
//             colorSquare(square, i);
//         });

    
//         rowg.appendChild(square);
//     }

    
   
    
// }

// COLORE + NUMERO AL CLICK

let contoClick = 0;

function colorSquare(square, number) {
    // square.textContent= number;
    // square.style.backgroundColor = `aquamarine`;
    // console.log (`cella cliccata`, square.textContent);

    contoClick++;
    console.log(contoClick);

    if (bombe.includes(number)) {
        square.textContent = "💣"; 
        square.style.backgroundColor = "red";
        console.log( "Hai perso! ");
    }else {
        square.textContent = number;
        square.style.backgroundColor= `aquamarine`;
        console.log(`cella cliccata`, square.textContent);
    }

}


function RandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function TheBomb (max) {
    const resultArray = [];
    while (resultArray.length < 16) {
        const Random = RandomNumber (1, max); 
            if (!resultArray.includes(Random)) {
                resultArray.push(Random);
                
            }
    }
    console.log(resultArray);
    return(resultArray);

}

// function TheBomb (max) {
//     const resultArray = [];
//     while (result.length < 16){
//         const Random = RandomNumber (1 , max);
//         if(!resultArray.includes(Random)) {
//             result.push(Random);
//         }
//     }
//     return(result);
// }



