let questions = [
    {
        numb: 1,
        question: "If you are justice, please do not lie. What is the price for your blind eye?",
        answer: "Bribe",
        options: [
            "Bribe",
            "Option B"
        ]
    },
    {
        numb: 2,
        question: " I grew up from a seed, as tough as a weed. But in a mansion, in a slum, I'll never know    where I come from. Do you know what I am?",
        answer: "Orphan",
        options: [
            "Orphan",
            "Option B"
        ]
    },
    {
        numb: 3,
        question: "The less of them you have, the more one is worth?",
        answer: "Friend",
        options: [
            "Friend",
            "Option B"
        ]
    },
    {
        numb: 4,
        question: "What is always on time but never arrives?",
        answer: "Tomorrow",
        options: [
            "Tomorrow",
            "Option B"
        ]
    },
    {
        numb: 5,
        question: "I feel your every move. I'm with you from birth, and I'll see you when you rot.",
        answer: "Shadow",
        options: [
            "Shadow",
            "Option B"
        ]
    },
    {
        numb: 6,
        question: "We're five little items of an everyday sort, you'll find us all in a tennis court.",
        answer: "Vowels",
        options: [
            "Vowels",
            "Option B"
        ]
    },
    {
        numb: 7,
        question: "I have billions of eyes, yet live in darkness. I have millions of ears, yet only four lobes. I have no muscle, yet rule two hemispheres. What am I?",
        answer: "Brain",
        options: [
            "Brain",
            "Option B"
        ]
    }
];


// const answers = [

//     {
//         question:"If you are justice, please do not lie. What is the price for your blind eye?",
//         answer: "Bribe"
//     },
//     {
//          question:" I grew up from a seed, as tough as a weed. But in a mansion, in a slum, I'll never know where I come from. Do you know what I am?",
//          answer:" Orphan",
//     }
// ];


// function checkAnswers()
// {
//     let score =0;

//     for(let x=0;x<answers.length;x++)
//     {
//         let response = document.getElementById(`${answers[x].country.toLowerCase()}`);


//         if(response.value == "")
//         {
//             return null;
//         }

//         if(response.value == answers[x].capital)
//         {
//             score +=1;
//         }
//     }
//     document.getElementById("score").innerHTML = "Score: "+ score + "/" + answers.length;
// }
// let text = "";
// for(let i=0;i<answers.length;i++)
// {
//     text +=`<h1>Riddle[i] ${answers[i].question}</h1>
//     <input id = "${answers[i].question.toLowerCase()}" type="text">

   
//     `
// }

// document.getElementById("quiz").innerHTML= text +`<button onclick ="checkAnswers()">Submit</button>`;