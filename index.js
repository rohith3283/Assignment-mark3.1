
var readlinesync = require("readline-sync");


var score = 0;
var username = readlinesync.question("what's your name? ");

console.log("welcome " + username);
console.log(                          );
console.log("Note: while answering TURN OFF Caps lock");

console.log("                        "   );

function play(question, answer) {
  var useranswer = readlinesync.question(question);

  if (useranswer === answer) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!")
  }
  console.log("current score: ", score);
  console.log("........................")
}

var questions = [{

  question: "do you know rohith? ",
  answer: "yes"
}, {
  question: "where do i live? ",
  answer: "vizag"
}, {
  question: "my favourite actor in tollywood? ",
  answer: "prabhas"
}, {
  question: "my favourite place in vizag? ",
  answer: "rk beach"
}, {
  question: "my favourite politician leader? ",
  answer: "ys jagan"

}]

for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer)
}

console.log("you scored: ", score);
console.log("                 ");
console.log("     ##### thank you #####    ");

