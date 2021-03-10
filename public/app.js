
let playerData ={
    blue : {},
    yellow : {},
    red : {},
    white : {}
}



// colonizeData = some form data
const colonize = () => {
    //get form data for what player colonized. html form should be formatted like blueResources
    //to make it easier to add resources like  player
    const player = document.querySelector('input[name="player"]:checked').value
    console.log(player)
    //get form data for what resource they now get
    const resource = document.querySelector('input[name="resource"]:checked').value
    console.log(resource)
    //get form data for what number that they will get the resource on
    const number = parseInt(document.getElementById('put-resource-number').value)
    console.log(typeof number)

    //finally, let's add to our resource dicts above
    if (playerData[player][number]) {
        playerData[player][number].push(resource)
    } else{
        playerData[player][number] = [resource]
    }
    getAllResources()
}

// playerRoll = some player and number rolled
const getRolledResources = () => {
    //let's store the number selected as number
    const number = parseInt(document.getElementById('get-resource-number').value)

    //Create #individual-resource-list as a var so we can easily add content
    const rolledResourceList = document.getElementById('rolled-resource-list')
    //let's always make sure to remove any previous results from the dom before displaying new requested info
    rolledResourceList.removeChild(rolledResourceList.firstChild)

    //now, let's build and append the content to display
    const resourceListDiv = document.createElement('div')
    for (const eachPlayer in playerData){
        if (playerData[eachPlayer][number]) {
            const resourceList = document.createTextNode(`${number} - ${eachPlayer}: ` + playerData[eachPlayer][number])
            resourceListDiv.appendChild(resourceList)
            rolledResourceList.append(resourceListDiv)
        }
    }
}

// keeps the page up to date on resources and colonies
const getAllResources = () => {
    //everytime this is called, let's make sure our table is clear of data
    const dataRows = document.querySelectorAll('.data-rows')
    dataRows.forEach(e => e.parentNode.removeChild(e));


    const allResourcesChart = document.getElementById('all-resources')
    for (const eachPlayer in playerData){
        const newRow = document.createElement("div")
        newRow.className = 'row data-rows'
        const newPlayerDiv = document.createElement('div')
        newPlayerDiv.className = 'col'
        const newPlayer = document.createTextNode(eachPlayer)
        newPlayerDiv.appendChild(newPlayer)
        newRow.appendChild(newPlayerDiv)

        for (let i = 2; i < 13; i++) {
            const newCol = document.createElement('div')
            newCol.className = 'col'
            const newColData = document.createTextNode(`${playerData[eachPlayer][i]}`)
            newCol.appendChild(newColData)
            newRow.appendChild(newCol)
        }
        allResourcesChart.appendChild(newRow)
    }
}


document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (event.target.matches('#colonize')) {
        event.preventDefault();
        console.log(event.target);
        // run colonize function
        colonize()
        //log all player resources
    } else if (event.target.matches('#resources')) {
        event.preventDefault();
        console.log(event.target);
        getRolledResources()
    }

}, false);
