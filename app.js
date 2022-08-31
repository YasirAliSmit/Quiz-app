// Sadiq bhai jan help start 

// var data = [
//   {
//     question: "Q1 : What Js Stand for ?",
//     a: "JavaScript",
//     b: "PHP",
//     c: "Java",
//     d: "TypeScript",
//     ans: "ans1",
//   },
//   {
//     question: "Q2 : is JavaScript is Casecensitive? ",
//     a: "Yes",
//     b: "No",
//     c: "both Answer is true",
//     d: "JavaScript is Case Censitive",
//     ans: "ans1",
//   },
//   {
//     question: "Q3 : JavaScript is MarkUp Language?",
//     a: "No",
//     b: "Yes",
//     c: "it is a programing language",
//     d: "a and b is right?",
//     ans: "ans1",
//   },
//   {
//     question: "Q4 : What is Correct path to write script tags?",
//     a: "Inside Body",
//     b: "Outside Body",
//     c: "Before body Closing Tags",
//     d: "C is Correct Answer",
//     ans: "ans3",
//   },
//   {
//     question: " Q5  : if we put false data type in if Statment is it work?",
//     a: "Yes",
//     b: " No",
//     c: "if Condition must be true",
//     d: " 0 is equal to false ",
//     ans: "ans2",
//   },
// ];

// var questionshowquiz = document.getElementsByClassName("question")[0];
// var opt1 = document.getElementById("optiona1");
// var opt2 = document.getElementById("optiona2");
// var opt3 = document.getElementById("optiona3");
// var opt4 = document.getElementById("optiona4");

// var count = 0;
//bhai ya kha sea ayya // question.innerHTML = data.question[0]
// function questionshow() {
//   var questionlist = data[count];
//   questionshowquiz.innerHTML = questionlist.question;
//   opt1.innerHTML = questionlist.a;
//   opt4.innerHTML = questionlist.b;
//   opt3.innerHTML = questionlist.c;
//   opt2.innerHTML = questionlist.d;
// }

// questionshow();

// function loadQuestions(){
//     count++;
//     if(count<data.length){
//         questionshow();
//     }
// }

// var  result = 0;
// var answer = document.querySelectorAll('.answer')
// for(i=0; i<answer.length; i++){
//     console.log(answer[i].id)
//     if(data[0].ans==answer[i].id){
//         result ++;
//     }
// }
// // function loadQuestions() {
// //   count++;
// //   if (count < data.length) {
// //     questionshow();
// //   }
// // }

// Sadiq bhai jan help end
// //sadiq bhai help solution start
// var data = [
//   {
//     question: "Q1 : What Js Stand for ?",
//     a: "JavaScript",
//     b: "PHP",
//     c: "Java",
//     d: "TypeScript",
//     ans: "ans1",
//   },
//   {
//     question: "Q2 : is JavaScript is Casecensitive? ",
//     a: "Yes",
//     b: "No",
//     c: "both Answer is true",
//     d: "JavaScript is Case Censitive",
//     ans: "ans1",
//   },
//   {
//     question: "Q3 : JavaScript is MarkUp Language?",
//     a: "No",
//     b: "Yes",
//     c: "it is a programing language",
//     d: "a and b is right?",
//     ans: "ans1",
//   },
//   {
//     question: "Q4 : What is Correct path to write script tags?",
//     a: "Inside Body",
//     b: "Outside Body",
//     c: "Before body Closing Tags",
//     d: "C is Correct Answer",
//     ans: "ans3",
//   },
//   {
//     question: " Q5  : if we put false data type in if Statment is it work?",
//     a: "Yes",
//     b: " No",
//     c: "if Condition must be true",
//     d: " 0 is equal to false ",
//     ans: "ans2",
//   },
// ];


// var questions = document.querySelector(".question")
// var opt1 = document.getElementById('optiona1')
// var opt2 = document.getElementById('optiona2')
// var opt3 = document.getElementById('optiona3')
// var opt4 = document.getElementById('optiona4')



// var count=0;

// function questionLoad(){
//   questionList=data[count]
//   questions.innerHTML=questionList.question

//   opt1.innerHTML=questionList.a
//   opt2.innerHTML=questionList.b
//   opt3.innerHTML=questionList.c
//   opt4.innerHTML=questionList.d

// }
// questionLoad()
//sadiq bhai jan help end

//now youtube start


var quizDb = [
  {
    question: "Q1 : What Js Stand for ?",
    a: "JavaScript",
    b: "PHP",
    c: "Java",
    d: "TypeScript",
    ans: "ans1",
  },
  {
    question: "Q2 : is JavaScript is Casecensitive? ",
    a: "Yes",
    b: "No",
    c: "both Answer is true",
    d: "JavaScript is Case Censitive",
    ans: "ans1",
  },
  {
    question: "Q3 : JavaScript is MarkUp Language?",
    a: "No",
    b: "Yes",
    c: "it is a programing language",
    d: "a and b is right?",
    ans: "ans1",
  },
  {
    question: "Q4 : What is Correct path to write script tags?",
    a: "Inside Body",
    b: "Outside Body",
    c: "Before body Closing Tags",
    d: "C is Correct Answer",
    ans: "ans3",
  },
  {
    question: " Q5  : if we put false data type in if Statment is it work?",
    a: "Yes",
    b: " No",
    c: "if Condition must be true",
    d: " 0 is equal to false ",
    ans: "ans2",
  },
];

var question = document.querySelector(".question");
var option1 = document.getElementById("optiona1");
var option2 = document.getElementById("optiona2");
var option3 = document.getElementById("optiona3");
var option4 = document.getElementById("optiona4");
var submit = document.querySelector('#submit')
var answ   = document.querySelectorAll('.answer')
const showNum = document.getElementById('showScore')
var questionCount = 0 ;
let Score = 0 ;

console.log(answ)
const loadQuestion = () => {
  const questionList = quizDb[questionCount]
  question.innerHTML = questionList.question
  option1.innerHTML = questionList.a
  option2.innerHTML = questionList.b
  option3.innerHTML = questionList.c
  option4.innerHTML = questionList.d
  
}




loadQuestion()

var getCheckAnswer = () => {
 let answer ;
 answ.forEach((elementCurrent)=>{
   if(elementCurrent.checked){
     answer = elementCurrent.id;
     
     
     
    }
  })
  
  return answer
}




submit.addEventListener('click',() => {
  var checkAnswer = getCheckAnswer()
  
  console.log(checkAnswer)
  if( checkAnswer === quizDb[questionCount].ans ){
    Score++
  }
});

//questionCount++
if ( questionCount < quizDb.length ){
  loadQuestion()
}
else{
  showNumOne
}

function increBtn() {
  questionCount++
}
increBtn()
console.log(questionCount++)