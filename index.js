
/* map function */

function myMap (arr, func) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        let result = func(arr[i])
        newArr.push(result)
    }
    return newArr
}

/* filter function */

function myFilter (arr, func){
    let filteredArr = []

    for (let i = 0; i < arr.length; i++){
        let result = func(arr[i])

        if (result){
            filteredArr.push(result)
        }
    }
    return filteredArr
    
}

/* reduce function */

function myReduce (arr, func, initialValue){
    let acc = initialValue || 0;

    for (let i = 0; i < arr.length; i++ ){
        let res = func(arr[i], acc)
    }
    return acc
}