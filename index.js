function map(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]))
    }
    return newArray
}

function reduce(array, func, startingValue) {
    let endPoint = !!startingValue ? startingValue : array[0];
    for (let i = !!startingValue ? 0 : 1; i < array.length; i++) {
        endPoint = func(array[i], endPoint)
    }
    return endPoint
}