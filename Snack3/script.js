function myfunction(array, min, max) {
    newArray=[];
    for(let i = min; i <= max; i++){
        newArray.push(array[min, max])
    }
    return newArray;
}


const array0 = [1,2,3,4,5];

const array1= myfunction(array0[1,3]);
console.log(array1);
