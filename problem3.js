// Problem 03 : Virus in my Array

function deleteInvalids(array){
    if(Array.isArray(array)){
        let numArray = [];
        for(let a of array){
            if(typeof a == "number" && Number.isNaN(a) == false){
                numArray.push(a)
            }
        }
        return numArray
    }else{
        return "Please! Input an Array"
    }
}

console.log(deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]))