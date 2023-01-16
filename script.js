const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '15',
    c: '26',
    d: '49',
    correct: 'c'
  },
  {
    question: 'What is the best programming language?',
    a: 'Java',
    b: 'C++',
    c: 'Python',
    d: 'JavaScript',
    correct: 'a'
  },
  {
    question: 'Who is the Prime Minister of India?',
    a: 'Rahul',
    b: 'Nitish',
    c: 'Gandhi',
    d: 'Modi',
    correct: 'd'
  }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 

const submitBtn = document.getElementById('submit');

let counter = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  delselectAnswers();

  const currentQuizData = quizData[counter];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected(){
  let answer = undefined;

  answerEls.forEach((answerEl) =>{
    if(answerEl.checked){
      answer = answerEl.id;
      // console.log(answerEl.id);
    }
  });
  return answer;
}

function delselectAnswers(){
  answerEls.forEach((answerEl) =>{
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', ()=>{
  // check to see the answer
  const answer = getSelected();

  console.log(answer);
  if(answer){ // if answer is there
    if(answer === quizData[counter].correct){ // like if we select d then, (d == d) if d was the answer
      score++;
    }
    counter++;
    if(counter < quizData.length){
      loadQuiz();
    }else{
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. <h2>`;
    } 
  }
});