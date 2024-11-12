function myfunction(array, a, b) {
    newArray=[];
    for(let i = a; i <= b; i++){
        newArray.push(array[i]); 
    }
    return newArray;
}
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const a = 2; 
const b= 5; 

const resultArray1 = myfunction(array1, 2, 5); 
console.log(resultArray1); 



const array2 = [10, 20, 30, 40, 50];
const c = 0;
const d = 2;

const resultArray2 = myfunction(array2, 0, 2);
console.log(resultArray2);
