let shuffledQuestions = [];
let submitted = false;

function renderQuestions() {
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  shuffledQuestions.forEach((q, index) => {
    const maxSelect = q.correctAnswers.length;
    const isMulti = maxSelect > 1;

    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `
      <h3>Q${index + 1}. ${q.question}</h3>
      <div class="note">
        ${isMulti
          ? `There are ${maxSelect} correct answers`
          : "There is only 1 correct answer"}
      </div>
      <div class="options">
        ${q.options
          .map(
            (opt, i) => `
          <label>
            <input type="${isMulti ? "checkbox" : "radio"}"
                   name="q${index}"
                   value="${i}">
            ${opt}
          </label>`
          )
          .join("")}
      </div>
    `;
    container.appendChild(div);

    if (isMulti) {
      div.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", () => {
          const checked = div.querySelectorAll("input:checked");
          if (checked.length > maxSelect) {
            input.checked = false;
            alert(`You can select only ${maxSelect} options`);
          }
        });
      });
    }
  });
}

function submitExam() {
  if (submitted) return;
  submitted = true;

  let score = 0;
  const questionDivs = document.querySelectorAll(".question");

  questionDivs.forEach((div, qIndex) => {
    const inputs = div.querySelectorAll("input");
    const selected = [];

    inputs.forEach((inp, i) => {
      if (inp.checked) selected.push(i);
      inp.disabled = true;
    });

    const correct = shuffledQuestions[qIndex].correctAnswers.sort().toString();
    const chosen = selected.sort().toString();

    if (correct === chosen) score++;

    inputs.forEach((inp, i) => {
      if (shuffledQuestions[qIndex].correctAnswers.includes(i)) {
        inp.parentElement.classList.add("correct");
      } else if (inp.checked) {
        inp.parentElement.classList.add("wrong");
      }
    });
  });

  document.getElementById("result").innerText =
    `Your Score: ${score} / ${shuffledQuestions.length}`;

  document.getElementById("retakeBtn").classList.remove("hidden");
}

function retakeExam() {
  submitted = false;
  document.getElementById("result").innerText = "";
  document.getElementById("retakeBtn").classList.add("hidden");


  shuffledQuestions = questions.map(q => ({ ...q }));
  renderQuestions();
}

document.getElementById("submitBtn").addEventListener("click", submitExam);
document.getElementById("retakeBtn").addEventListener("click", retakeExam);

shuffledQuestions = questions.map(q => ({ ...q }));
renderQuestions();
