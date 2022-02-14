const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: 'Script', correct: true },
      { text: 'html', correct: false }
    ]
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '.js', correct: true },
      { text: '.xml', correct: false },
      { text: '.html', correct: false },
      { text: '.css', correct: false }
    ]
  },
  {
    question: 'Event is Used To Check An Empty Text Box:',
    answers: [
      { text: 'Onclick()', correct: false },
      { text: 'OnFocus()', correct: false },
      { text: 'Onblur()', correct: true },
      { text: 'None', correct: false }
    ]
  },
  {
    question: 'GetMonth() returns The Month as:',
    answers: [
      { text: 'char', correct: false },
      { text: 'Int', correct: true },
      { text: 'string', correct: false },
      { text: 'float', correct: false },
    ]
  },
  {
    question: 'The Tag is used To Give Heading To The Table.',
    answers: [
      { text: 'Head', correct: false },
      { text: 'td', correct: false },
      { text: 'Caption', correct: true },
      { text: 'th', correct: false }
    ]
  },
  {
    question: 'Function is Used To Parse a String To Int:',
    answers: [
      { text: 'Integer.Parse', correct: false },
      { text: 'Int.Parse', correct: true },
      { text: 'Parse.Int', correct: false },
      { text: 'none', correct: false }
    ]
  },
  {
    question: 'A Function Associated With An object is Called:',
    answers: [
      { text: 'Function', correct: false },
      { text: 'class', correct: false },
      { text: 'Method', correct: true },
      { text: 'link', correct: false }
    ]
  },
  {
    question: 'Method Prompt() Contain ........Number of Parameters.',
    answers: [
      { text: 'four', correct: false },
      { text: 'one', correct: false },
      { text: 'two', correct: true },
      { text: 'zero', correct: false }
    ]
  },
  {
      question: 'Which Of The Dialog Box Display a Message And a Data Entry Field?',
      answers: [
        { text: 'Alert()', correct: false },
        { text: 'Prompt()', correct: true },
        { text: 'confirm()', correct: false },
        { text: 'Msg()', correct: false }
      ] 
  }
]