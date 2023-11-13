

function myMap (arr, func) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        let result = func(arr[i])
        newArr.push(result)
    }
    return newArr
}