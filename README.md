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
🔌 API
Health Check
GET /api/health

Used to check whether the backend is running.

Tutor
POST /api/tutor

Example request:

{
  "message": "I think x squared means x multiplied by 2",
  "classLevel": "Class 10",
  "topic": "Algebra"
}

Example response:

{
  "success": true,
  "reply": "AI-generated tutoring response..."
}
💻 Running Locally
1. Clone the repository
git clone YOUR-GITHUB-REPOSITORY-URL
cd misconception-tutor
2. Install dependencies
npm install
3. Create .env

Create a .env file in the project root:

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

Never commit your .env file or expose your API key publicly.

4. Start the backend
node server/server.js

The backend runs on:

http://localhost:5000
5. Start the frontend

Open another terminal:

npm run dev

The Vite development server will provide the frontend URL.

🔐 Environment Variables

The project requires:

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

The API key should be stored securely as an environment variable.

For deployment, add the variable through the hosting provider's environment-variable settings instead of putting the key inside the source code.

🎓 Example Use Case

A student might write:

"I think x squared means x multiplied by 2."

Instead of simply giving an answer, Misconception Tutor can explain the difference between:

x²

and

2x

and then ask the student a short question to check their understanding.

This makes the interaction focused on learning the concept, not just obtaining the answer.

🌟 Hackathon Goal

Misconception Tutor explores how AI can be used as a learning companion that focuses on understanding student misconceptions rather than simply generating answers.

The project was built as a prototype for the CodeMyFYP Hackathon.

👥 Project

Project: Misconception Tutor

Category: AI / Education

Built with: React, Node.js, Express and Google Gemini


### Then do this

1. Replace:
   ```text
   PASTE-YOUR-RENDER-URL-HERE

with your actual Render URL.

Replace:

PASTE-YOUR-GITHUB-URL-HERE

with your GitHub repository URL.

Save README.md.
Push it:
git add README.md
git commit -m "Add project README"
git push
