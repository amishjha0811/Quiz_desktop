// renderer.js - Handles UI logic for login, registration, quiz, and scores

const API_BASE = 'http://localhost:5000/api'; // Adjust if backend runs elsewhere
let jwtToken = null; // Store JWT token after login
let quizzes = []; // Store available quizzes
let currentQuizId = null; // Track current quiz ID
let currentQuizQuestions = null; // Store current quiz questions
let userAnswers = {}; // Store user's answers

function showBanner(type, message) {
  return `<div class="banner-${type}">${message}</div>`;
}

function showSpinner() {
  return '<div class="spinner"></div>';
}

function showHome() {
  document.getElementById('app').innerHTML = `
    <h2>Welcome to Quiz App</h2>
    <button id="loginBtn">Login</button>
    <button id="registerBtn">Register</button>
  `;
  document.getElementById('loginBtn').onclick = showLogin;
  document.getElementById('registerBtn').onclick = showRegister;
}

function showMainMenu() {
  document.getElementById('app').innerHTML = `
    <h2>Quiz App</h2>
    <button id="takeQuizBtn">Take Quiz</button>
    <button id="viewScoresBtn">View Scores</button>
    <button id="logoutBtn">Logout</button>
  `;
  document.getElementById('takeQuizBtn').onclick = showQuizSelection;
  document.getElementById('viewScoresBtn').onclick = showScores;
  document.getElementById('logoutBtn').onclick = () => {
    jwtToken = null;
    showHome();
  };
}

function addPasswordToggle(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);
  toggle.onclick = () => {
    if (input.type === 'password') {
      input.type = 'text';
      toggle.innerHTML = '🙈';
    } else {
      input.type = 'password';
      toggle.innerHTML = '👁️';
    }
  };
}

function showLogin() {
  document.getElementById('app').innerHTML = `
    <h2>Login</h2>
    <form id="loginForm">
      <input type="text" id="loginUsername" placeholder="Username" required />
      <div style="position:relative;">
        <input type="password" id="loginPassword" placeholder="Password" required style="padding-right:32px;" />
        <span id="loginPwToggle" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);cursor:pointer;">👁️</span>
      </div>
      <button type="submit">Login</button>
    </form>
    <div id="loginMsg"></div>
    <button id="backBtn">Back</button>
  `;
  addPasswordToggle('loginPassword', 'loginPwToggle');
  document.getElementById('backBtn').onclick = showHome;
  document.getElementById('loginForm').onsubmit = async (e) => {
    e.preventDefault();
    document.getElementById('loginMsg').innerHTML = showSpinner();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        jwtToken = data.token;
        document.getElementById('loginMsg').innerHTML = showBanner('success', 'Login successful!');
        setTimeout(showMainMenu, 700);
      } else {
        document.getElementById('loginMsg').innerHTML = showBanner('error', data.message || 'Login failed.');
      }
    } catch (err) {
      document.getElementById('loginMsg').innerHTML = showBanner('error', 'Error connecting to server.');
    }
  };
}

function showRegister() {
  document.getElementById('app').innerHTML = `
    <h2>Register</h2>
    <form id="registerForm">
      <input type="text" id="registerUsername" placeholder="Username" required />
      <input type="email" id="registerEmail" placeholder="Email" required />
      <div style="position:relative;">
        <input type="password" id="registerPassword" placeholder="Password" required style="padding-right:32px;" />
        <span id="registerPwToggle" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);cursor:pointer;">👁️</span>
      </div>
      <button type="submit">Register</button>
    </form>
    <div id="registerMsg"></div>
    <button id="backBtn">Back</button>
  `;
  addPasswordToggle('registerPassword', 'registerPwToggle');
  document.getElementById('backBtn').onclick = showHome;
  document.getElementById('registerForm').onsubmit = async (e) => {
    e.preventDefault();
    document.getElementById('registerMsg').innerHTML = showSpinner();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        document.getElementById('registerMsg').innerHTML = showBanner('success', 'Registration successful! Please login.');
      } else {
        document.getElementById('registerMsg').innerHTML = showBanner('error', data.message || 'Registration failed.');
      }
    } catch (err) {
      document.getElementById('registerMsg').innerHTML = showBanner('error', 'Error connecting to server.');
    }
  };
}

async function showQuizSelection() {
  document.getElementById('app').innerHTML = '<h2>Select a Quiz</h2>' + showSpinner();
  try {
    const res = await fetch(`${API_BASE}/quiz`, {
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    });
    const data = await res.json();
    if (res.ok && Array.isArray(data.quizzes)) {
      quizzes = data.quizzes;
      let html = '<h2>Select a Quiz</h2><form id="quizSelectForm">';
      html += '<select id="quizSelect" required>';
      quizzes.forEach(qz => {
        html += `<option value="${qz.id}">${qz.title} (${qz.category})</option>`;
      });
      html += '</select><br><button type="submit">Start Quiz</button></form>';
      html += '<button id="backBtn">Back</button>';
      document.getElementById('app').innerHTML = html;
      document.getElementById('backBtn').onclick = showMainMenu;
      document.getElementById('quizSelectForm').onsubmit = (e) => {
        e.preventDefault();
        currentQuizId = document.getElementById('quizSelect').value;
        showQuiz();
      };
    } else {
      document.getElementById('app').innerHTML = showBanner('error', 'Could not load quizzes.') + '<button id="backBtn">Back</button>';
      document.getElementById('backBtn').onclick = showMainMenu;
    }
  } catch (err) {
    document.getElementById('app').innerHTML = showBanner('error', 'Error loading quizzes.') + '<button id="backBtn">Back</button>';
    document.getElementById('backBtn').onclick = showMainMenu;
  }
}

async function showQuiz() {
  document.getElementById('app').innerHTML = showSpinner();
  try {
    const res = await fetch(`${API_BASE}/quiz?quiz_id=${currentQuizId}`, {
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    });
    const data = await res.json();
    if (res.ok && Array.isArray(data.questions)) {
      currentQuizQuestions = data.questions;
      userAnswers = {};
      renderQuizQuestion(0);
    } else {
      document.getElementById('app').innerHTML = showBanner('error', 'Could not load quiz questions.') + '<button id="backBtn">Back</button>';
      document.getElementById('backBtn').onclick = showMainMenu;
    }
  } catch (err) {
    document.getElementById('app').innerHTML = showBanner('error', 'Error loading quiz.') + '<button id="backBtn">Back</button>';
    document.getElementById('backBtn').onclick = showMainMenu;
  }
}

function renderQuizQuestion(index) {
  if (!currentQuizQuestions || index >= currentQuizQuestions.length) {
    submitQuiz();
    return;
  }
  const q = currentQuizQuestions[index];
  document.getElementById('app').innerHTML = `
    <h2>Quiz</h2>
    <div><b>Q${index + 1}:</b> ${q.question_text}</div>
    <form id="quizForm">
      <label><input type="radio" name="option" value="A" required> ${q.option_a}</label><br>
      <label><input type="radio" name="option" value="B"> ${q.option_b}</label><br>
      <label><input type="radio" name="option" value="C"> ${q.option_c}</label><br>
      <label><input type="radio" name="option" value="D"> ${q.option_d}</label><br>
      <button type="submit">Next</button>
    </form>
    <button id="cancelBtn">Cancel</button>
  `;
  document.getElementById('cancelBtn').onclick = showMainMenu;
  document.getElementById('quizForm').onsubmit = (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="option"]:checked').value;
    userAnswers[q.id] = selected;
    renderQuizQuestion(index + 1);
  };
}

async function submitQuiz() {
  document.getElementById('app').innerHTML = showSpinner();
  try {
    const res = await fetch(`${API_BASE}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      },
      body: JSON.stringify({ quiz_id: currentQuizId, answers: userAnswers })
    });
    const data = await res.json();
    if (res.ok) {
      let html = `<h2>Quiz Submitted!</h2>${showBanner('success', `Your Score: ${data.score}`)}`;
      html += '<h3>Review</h3>';
      html += '<div style="max-height:300px;overflow:auto">';
      data.review.forEach((item, idx) => {
        let userAns = item.user_answer || '-';
        let correctAns = item.correct_answer;
        let isCorrect = item.is_correct;
        let opt = item.options;
        html += `<div style="margin-bottom:18px;padding:10px;border-radius:8px;border:1px solid #eee;background:${isCorrect ? '#e0fce0' : '#ffeaea'};">
          <b>Q${idx+1}:</b> ${item.question}<br>
          <b>Your answer:</b> <span style="color:${isCorrect ? 'green' : 'red'}">${userAns} - ${opt[userAns] || '-'}</span><br>
          <b>Correct answer:</b> <span style="color:green">${correctAns} - ${opt[correctAns]}</span><br>
          ${isCorrect ? '<span style="color:green">✔ Correct</span>' : '<span style="color:red">✖ Incorrect</span>'}
        </div>`;
      });
      html += '</div>';
      html += '<button id="mainMenuBtn">Main Menu</button>';
      document.getElementById('app').innerHTML = html;
      document.getElementById('mainMenuBtn').onclick = showMainMenu;
    } else {
      document.getElementById('app').innerHTML = showBanner('error', 'Submission failed.') + '<button id="mainMenuBtn">Main Menu</button>';
      document.getElementById('mainMenuBtn').onclick = showMainMenu;
    }
  } catch (err) {
    document.getElementById('app').innerHTML = showBanner('error', 'Error submitting quiz.') + '<button id="mainMenuBtn">Main Menu</button>';
    document.getElementById('mainMenuBtn').onclick = showMainMenu;
  }
}

async function showScores() {
  document.getElementById('app').innerHTML = showSpinner();
  try {
    const res = await fetch(`${API_BASE}/score`, {
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    });
    const data = await res.json();
    if (res.ok && Array.isArray(data.scores)) {
      let html = '<h2>Your Scores</h2><ul>';
      data.scores.forEach(s => {
        html += `<li>Quiz: ${s.quiz_title || s.quiz_id}, Score: ${s.score}, Date: ${new Date(s.submitted_at).toLocaleString()}</li>`;
      });
      html += '</ul><button id="mainMenuBtn">Main Menu</button>';
      document.getElementById('app').innerHTML = html;
      document.getElementById('mainMenuBtn').onclick = showMainMenu;
    } else {
      document.getElementById('app').innerHTML = showBanner('error', 'Could not load scores.') + '<button id="mainMenuBtn">Main Menu</button>';
      document.getElementById('mainMenuBtn').onclick = showMainMenu;
    }
  } catch (err) {
    document.getElementById('app').innerHTML = showBanner('error', 'Error loading scores.') + '<button id="mainMenuBtn">Main Menu</button>';
    document.getElementById('mainMenuBtn').onclick = showMainMenu;
  }
}

// Initial view
showHome();

// To send data to main process
window.electronAPI.sendToMain('channelName', someData);

// To receive data from main process
window.electronAPI.receiveFromMain('channelName', (data) => {
  // handle data
}); 