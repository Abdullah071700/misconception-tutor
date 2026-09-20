import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";


dotenv.config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Misconception Tutor backend is running!",
  });
});


app.post("/api/tutor", async (req, res) => {
  const { message, classLevel, topic } = req.body;

  console.log("Student message:", message);
  console.log("Class:", classLevel);
  console.log("Topic:", topic);

  if (!message || !message.trim()) {
    return res.status(400).json({
      success: false,
      error: "Message is required.",
    });
  }

  try {
    const prompt = `
You are Misconception Tutor, a patient mathematics tutor.

Your main goal is NOT to immediately give the student the answer.
Your goal is to understand the student's thinking and identify the misconception or mistake.

Student information:
Class: ${classLevel || "Not specified"}
Topic: ${topic || "Not specified"}

Student's message:
${message}

Follow these rules:
1. First understand what the student is thinking.
2. Identify the likely misconception if one exists.
3. Do not shame or embarrass the student.
4. Explain the mistake in simple language.
5. Ask a short question that helps the student think about the mistake.
6. Do not immediately solve the entire problem unless it is necessary.
7. Keep the response concise and conversational.
8. Speak like a helpful human tutor, not like a textbook.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    res.status(500).json({
      success: false,
      error: "Unable to get a response from Gemini.",
    });
  }
});
const server = app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

server.on("error", (error) => {
  console.error("Server error:", error);
});