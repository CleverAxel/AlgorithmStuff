const SIZE_ROD = 12;
const SIZE_ARRAY = 50;
const CONTAINER = document.querySelector(".container");

let arrayRandom = new Array(SIZE_ARRAY);
for(let i = 0; i < arrayRandom.length; i++){
    let objectRod = {
        value : Math.floor(Math.random() * 100) + 1,
        rod : document.createElement("div")
    }
    objectRod.rod.classList.add("rod");
    objectRod.rod.style.height = objectRod.value.toString() + "%";
    objectRod.rod.style.left = (SIZE_ROD * i).toString() + "px";
    arrayRandom[i] = objectRod
    CONTAINER.appendChild(objectRod.rod);
}

SortArray();
console.log(arrayRandom);

function SortArray(){
    let swappedOccured = false;
    let temporaryVar;
    let i = 0;
    LoopRecursion();

    function LoopRecursion(){
        if(arrayRandom[i].value > arrayRandom[i+1].value){
            swappedOccured = true;
            let tallerRodStyle = arrayRandom[i].rod.style.left;
            let smallerRod = arrayRandom[i+1].rod.style.left;

            arrayRandom[i].rod.style.left = smallerRod;
            arrayRandom[i+1].rod.style.left = tallerRodStyle;
            temporaryVar = arrayRandom[i];
            arrayRandom[i] = arrayRandom[i+1];
            arrayRandom[i+1] = temporaryVar;

        }
        if(i < arrayRandom.length-2){
            i++;
            setTimeout(() => {
                LoopRecursion();
            }, 5);
        }else{
            if(swappedOccured){
                SortArray();
            }
        }
    }

}

/*sortTest()
console.log(arrayRandom)
function sortTest(){
    let tempVar = 0;
    let swapped = false;
    for(let i = 0; i < arrayRandom.length-1; i++){
        if(arrayRandom[i].value > arrayRandom[i+1].value){
            swapped = true;
            tempVar = arrayRandom[i];
            arrayRandom[i] = arrayRandom[i+1];
            arrayRandom[i+1] = tempVar;
        }
    }
    if(swapped){
        sortTest();
    }
}*/

/*while(!true != !false){
    let swapped = false;
    for(let i = 0; i < arrayRandom.length-1; i++){
        if(arrayRandom[i] > arrayRandom[i+1]){
            swapped = true;
            tempVar = arrayRandom[i];
            arrayRandom[i] = arrayRandom[i+1];
            arrayRandom[i+1] = tempVar;
        }
    }
    if(swapped == false){
        break;
    }
}*/

