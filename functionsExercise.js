// 10a. Create a const variable called newMuppetMovies and set the value to an array with the following values: "The Muppets" and "Muppets Most Wanted"
// 10b. Using the Map method on the newMuppetMovies array, create an anonymous declaration function to pass as an argument for the Map method that changes the letters of each array item to uppercase. Also, set the returned value to a new const variable called upperMovies.
function fozzieBear() {
    console.log("WOCKA WOCKA");
}
fozzieBear()

function beaker(speak) {
    console.log(speak)
    console.log(speak)
    console.log(speak)
    console.log(speak)
}

beaker("Meep")

function muppetShow(a, b) {
    if((a == "Muppet") && (b == "Show")){
        console.log("It's time to play the music. It's time to light the lights.");
    }
}

muppetShow("Muppet", "Show")

function kermit() {
    return "kermit the frog"
}

function muppetShowSeasons(seasons) {
    if (seasons == 5) {
        return true
    }
    return false
}

const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
}

const rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me"

//nah

//yee

const newMuppetsMovie = ["Muppets", "Muppets Most Wanted"]

const upperMovie = newMuppetsMovie.map(anything => anything.toUpperCase())
console.log(upperMovie);