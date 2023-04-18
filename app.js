const quizData = [
    {
        question: 'I........... in İstanbul last summer.',
        a: 'was',
        b: 'am',
        c: 'is',
        d: 'were',
        e: 'are',
        correct: 'a',
      },
      {
        question: 'We thought they ........... alone.',
        a: 'were',
        b: 'was',
        c: 'am',
        d: 'is',
        e: 'are',
        correct: 'a',
      },
      {
        question: 'My son and I ...... so excited.',
        a: 'were has',
        b: 'was',
        c: 'am',
        d: 'were',
        e: 'was here',
        correct: 'd',
      },
      {
        question: 'It ...... like they .....  trained to do this.',
        a: 'were / were',
        b: 'were / was',
        c: 'was / were',
        d: 'was / was',
        e: 'is / were',
        correct: 'c',
      },
      {
        question: ' It ....... like nobody ......... home.',
        a: 'is / was',
        b: 'were / was',
        c: 'were / were',
        d: 'was / were',
        e: 'was / was',
        correct: 'e',
      },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer 

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
       }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    // console.log(answer)

    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz<quizData.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `
            <h2> Quiz Completed, ${score *20} you got points. </h2>
            <button class="submit" onClick="location.reload()">Try Again</button>
            `
        }
    }
    
})