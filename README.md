# 🧠 Misconception Tutor

An AI-powered mathematics tutor that helps students identify and correct their misconceptions instead of simply giving them the final answer.

## 🚀 Live Demo

**Live Demo:** PASTE-YOUR-RENDER-URL-HERE

**GitHub Repository:** PASTE-YOUR-GITHUB-URL-HERE

---

## 🎯 Problem

Students often make mistakes in mathematics because of misunderstandings in their basic concepts.

Traditional AI tutors often provide the correct answer immediately. This can solve the current question without helping the student understand where their thinking went wrong.

Misconception Tutor is designed to focus on the student's **thinking process**.

---

## 💡 Solution

Misconception Tutor uses AI to:

- Understand what the student is thinking.
- Identify possible mathematical misconceptions.
- Explain the mistake in simple language.
- Guide the student toward the correct understanding.
- Ask questions that encourage the student to think.
- Avoid immediately giving the complete answer.

The goal is to help students **understand why they made a mistake**, not just tell them what the answer is.

---

## ✨ Features

### 🤖 AI Mathematics Tutor
Students can describe their problem in natural language and receive an AI-generated response.

### 🔍 Misconception Detection
The tutor analyzes the student's explanation to identify possible misunderstandings.

### 💬 Conversational Learning
Instead of behaving like a textbook, the tutor responds conversationally.

### 🎓 Student Context
The student can provide their:

- Class level
- Topic
- Question or misconception

### 🧠 Socratic-style Guidance
The tutor can ask short questions that encourage students to reason about their mistake.

### ⚡ Real-time Responses
The frontend communicates with the backend API and receives AI-generated responses.

---

## 🛠️ Technology Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- CORS
- dotenv

### AI
- Google Gemini API
- `@google/genai`

### Deployment
- Frontend: Vite application
- Backend: Render
- Source Code: GitHub

---

## 🏗️ Project Structure

```text
misconception-tutor/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── server/
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
