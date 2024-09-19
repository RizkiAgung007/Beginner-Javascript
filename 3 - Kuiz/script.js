// Isi dalam kuis
const questions = [
  {
    question: "Banteng merah sebuatan dari partai?",
    answers: [
      { text: "Demokrat", correct: false },
      { text: "PKS", correct: false },
      { text: "PDIP", correct: true },
      { text: "Gerinda", correct: false },
    ],
  },
  {
    question: "Siapa presiden ke-8 Indonesia?",
    answers: [
      { text: "Anies", correct: false },
      { text: "Prabowo", correct: true },
      { text: "Ganjar", correct: false },
      { text: "Komeng", correct: false },
    ],
  },
  {
    question: "Kalo lapar kita harus?",
    answers: [
      { text: "Malak", correct: false },
      { text: "Minum", correct: false },
      { text: "Mandi", correct: false },
      { text: "Makan", correct: true },
    ],
  },
];

// Pembuatan ketika button di klik
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");

// Mengatur nilai pada pertanyaan sebelum kuis
let currentQuestionIndex = 0;
let score = 0;

//ketika kuis dimulai kembali score menjadi 0
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

// Memunculkan jawaban pada pertanyaan ketika kuis dimulai
function showQuestion() {
  //   Mengatur ulang dan jawaban sebelumnya menggunakan resetState();
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  //Menampilkan jawaban
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// Funsi mereset ulang pertanyaan dan jawaban sebelumnya
function resetState() {
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//Fungsi menampilkan jawaban yang benar
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // Fungsi untuk memilih 1 pilihan
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

// Menampilkan score
function showScore() {
  resetState();
  questionElement.innerHTML = `You score ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

// next button ketika sudah mengisi jawaban
function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
