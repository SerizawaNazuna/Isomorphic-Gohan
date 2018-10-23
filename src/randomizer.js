exports.randomize = (rest) =>{
    let randomizedRest = rest
    while(randomizedRest.length > 10){
        const index = Math.floor(Math.random() * (randomizedRest.length + 1))
        randomizedRest.splice(index, 1)
    }
    return randomizedRest
}