// Question Object
const questionObj = [
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    question: "Which of the following is a front-end JavaScript framework?",
    options: ["Django", "Flask", "Angular", "Spring"],
    correctAnswer: "Angular",
  },
  {
    question: "What is the primary use of Docker?",
    options: [
      "Virtualization",
      "Containerization",
      "Networking",
      "Database Management",
    ],
    correctAnswer: "Containerization",
  },
  {
    question: "Which HTTP method is used to update an existing resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "PUT",
  },
  {
    question: "What is the purpose of RESTful APIs?",
    options: [
      "To create web pages",
      "To define the look of a website",
      "To facilitate communication between client and server",
      "To manage databases",
    ],
    correctAnswer: "To facilitate communication between client and server",
  },
  {
    question: "Which of the following is a state management library for React?",
    options: ["Redux", "Axios", "Bootstrap", "Express"],
    correctAnswer: "Redux",
  },
  {
    question: "What does CRUD stand for in database operations?",
    options: [
      "Create, Read, Update, Delete",
      "Create, Replace, Update, Delete",
      "Copy, Read, Use, Delete",
      "Create, Read, Undo, Delete",
    ],
    correctAnswer: "Create, Read, Update, Delete",
  },
  {
    question:
      "Which of the following is used to handle asynchronous operations in JavaScript?",
    options: ["Promises", "Variables", "Loops", "Objects"],
    correctAnswer: "Promises",
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["font-size", "color", "background-color", "text-align"],
    correctAnswer: "color",
  },
  {
    question: "What is Node.js primarily used for?",
    options: [
      "Client-side scripting",
      "Server-side scripting",
      "Database management",
      "Designing web pages",
    ],
    correctAnswer: "Server-side scripting",
  },
  {
    question: "Which of the following is a key feature of TypeScript?",
    options: ["Static typing", "Dynamic typing", "Weak typing", "No typing"],
    correctAnswer: "Static typing",
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    options: [
      "To manage state",
      "To perform side effects in function components",
      "To handle events",
      "To create components",
    ],
    correctAnswer: "To perform side effects in function components",
  },
  {
    question:
      "Which of the following HTTP status codes indicates a successful request?",
    options: ["200", "404", "500", "403"],
    correctAnswer: "200",
  },
  {
    question: "What is the purpose of middleware in Express.js?",
    options: [
      "To define routes",
      "To handle database operations",
      "To process requests before reaching the final handler",
      "To serve static files",
    ],
    correctAnswer: "To process requests before reaching the final handler",
  },
  {
    question: "Which of the following is a version control system?",
    options: ["Git", "Docker", "NPM", "Webpack"],
    correctAnswer: "Git",
  },
];

// Required HTML Element
const question = document.querySelector(".question");
const option = document.querySelector(".option");
const next = document.querySelector(".next");
const nextBtn = document.querySelector(".next-button");
const totalPointVar = document.querySelector(".total-point");
const currPoint = document.querySelector(".curr-point");
const container = document.querySelector(".container");

// Required Variable
let i = 0;
let point = 0;
let optionSelected = false;
const totalPoint = questionObj.length * 10;
currPoint.innerHTML = point;
totalPointVar.innerHTML = totalPoint;

function optionSlector() {
  let optionBtn = document.querySelectorAll(".option-btn");
  optionBtn?.forEach((el) => {
    el.addEventListener("click", function () {
      if (optionSelected) return;
      el.style.transform = "translate(50px)";
      optionBtn.forEach((btn) => {
        if (questionObj[i].correctAnswer === btn.innerHTML) {
          btn.style.backgroundColor = "#4AA84A";
        } else {
          btn.style.backgroundColor = "#A70D2A";
        }
      });

      if (questionObj[i].correctAnswer === el.innerHTML) {
        point += 10;
        currPoint.innerHTML = point;
      }

      optionSelected = true;
    });
  });
}

function reStart() {
  location.href = "https://quiz-for-coders.netlify.app";
}

// Displaying the question and option
question.innerHTML = questionObj[i].question;
questionObj[i].options.map((el) => {
  option.innerHTML += `<button class="option-btn">${el}</button>`;
});

optionSlector();

next.addEventListener("click", function () {
  if (optionSelected) {
    if (i < questionObj.length - 1) {
      i = i + 1;
      question.innerHTML = questionObj[i].question;
      option.innerHTML = "";
      questionObj[i].options.map((el) => {
        option.innerHTML += `<button class="option-btn">${el}</button>`;
      });
      optionSlector();
      optionSelected = false;
    } else {
      let percentage = (point / totalPoint) * 100;
      question.innerHTML = `😉 You scored ${point} out of ${totalPoint} (${percentage}%)`;
      option.innerHTML = "";
      nextBtn.innerHTML = `<button class="restart">Restart Quiz</button>`;
      const restart = document.querySelector(".restart");
      restart?.addEventListener("click", reStart);
    }
  } else {
    Toastify({
      text: "Please Select a Option",
      duration: 3000,
      // destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#495057",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
});

// Restart Quiz Functionality
