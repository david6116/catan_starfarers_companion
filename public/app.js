
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

}

// playerRoll = some player and number rolled
const getSingleRollResources = () => {
    const player = document.querySelector('input[name="player"]:checked').value
    console.log(player)
    const number = parseInt(document.getElementById('get-resource-number').value)
    console.log(playerData[player][number])


}

// playerResources = whatever player wants to see a list of all their resources
const getAllResouces = () => {

    //res.render{url,
    //{some anon dict}


}


document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (event.target.matches('#colonize')) {
        event.preventDefault();
        console.log(event.target);
        // run colonize function
        colonize()
        //log all player resources
        console.log(playerData)
    } else if (event.target.matches('#resources')) {
        event.preventDefault();
        console.log(event.target);
        getSingleRollResources()
    }

}, false);