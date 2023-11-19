const answers = [

    {
        question:"Australia",
        answer: "canberra"
    },
    {
         question:"Qatar",
         answer:"doha",
    }
];


function checkAnswers()
{
    let score =0;

    for(let x=0;x<answers.length;x++)
    {
        let response = document.getElementById(`${answers[x].country.toLowerCase()}`);


        if(response.value == "")
        {
            return null;
        }

        if(response.value == answers[x].capital)
        {
            score +=1;
        }
    }
    document.getElementById("score").innerHTML = "Score: "+ score + "/" + answers.length;
}
let text = "";
for(let i=0;i<answers.length;i++)
{
    text +=`<h1>What is the capital of ${answers[i].country}</h1>
    <input id = "${answers[i].country.toLowerCase()}" type="text">

   
    `
}

document.getElementById("quiz").innerHTML= text +`<button onclick ="checkAnswers()">Submit</button>`;