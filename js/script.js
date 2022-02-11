//Array of responses
const responses = [
    "As I see it, yes",
	"It is certain",
	"It is decidedly so",
	"Most likely",
	"Outlook good",
	"Signs point to yes",
	"Without a doubt",
	"Yes",
	"Yes - definitely",
	"You may rely on it",
    "Reply hazy, try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
    "Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
];
//Function for finding random index in an array
function getRandomResponse(arr){

    // get random index value
    const random = Math.floor(Math.random() * arr.length);
    // get random response
    const response = arr[random];
    return response;
}
//Function for return random index of responses[]
function results(){
    //call getRandomResponse function which generates random response
    const result = getRandomResponse(responses);
    //this displays the result
    document.getElementById("displayResults").innerHTML = result;
    console.log(result); 
}

const input = document.getElementById("input");
//event listener activates function when pressing enter
input.addEventListener("keydown", function(e) {
    //checks if key "Enter" is pressed.
    if(e.code === "Enter"){
     results();
    }
});


//look into DOM slides
//document.getelement reads html
//.innerHTML changes value 
//.createElement adds new elements