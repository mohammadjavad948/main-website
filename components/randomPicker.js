
export function randomNumber(length){

    return Math.floor(Math.random()*length)
}

export function randomItem(array){

    return array[randomNumber(array.length - 1)]
}