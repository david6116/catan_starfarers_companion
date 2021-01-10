

let players = 0

const playerColors = ['blue', 'red', 'yellow', 'white']
const resources = ['ore', 'fuel', 'carbon', 'food', 'goods']
const playersResources = {

}

const gameSetup = (numberOfPlayersSelected, colorsSelected) =>{
    for (let i=0; i<numberOfPlayersSelected-1; i++){
        playersResources[colorsSelected[i]] = []
    }
    console.log(playersResources)
}
//let's make sure the gameSetup works right
gameSetup(4, ['red', 'yellow', 'white'])


const colonize = (playerColor, newResources) => {
    playersResources[playerColor].push(newResources)
    console.log(playersResources)
}
//and make sure colonize works right
colonize('red', 'ore')
colonize('red', 'goods')

console.log(playersResources)



//click handlers
//one for game start that calls gameSetup()