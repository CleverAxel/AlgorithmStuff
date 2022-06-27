let arrayRandom = [25,20,15,10,5,15,7,2,15,25,30,-1];

let i = 0;
let startArray = 0;
let endArray = arrayRandom.length - 0;

while(startArray < Math.ceil(arrayRandom.length / 2)){
    let indexSmaller = startArray;
    let indexBigger = endArray-1;
    for(let j = startArray; j < endArray; j++){
        if(arrayRandom[j] < arrayRandom[indexSmaller]){
            indexSmaller = j;
        }
        if(arrayRandom[j] > arrayRandom[indexBigger]){
            indexBigger = j;
        }
    }

    let temporaryVar = arrayRandom[indexSmaller];
    arrayRandom[indexSmaller] = arrayRandom[startArray];
    arrayRandom[startArray] = temporaryVar;

    temporaryVar = arrayRandom[indexBigger];
    arrayRandom[indexBigger] = arrayRandom[endArray-1];
    arrayRandom[endArray-1] = temporaryVar;

    i++;
    startArray = i;
    endArray = arrayRandom.length - i;
}

console.log(arrayRandom)