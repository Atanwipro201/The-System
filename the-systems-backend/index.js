import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"; // added
import { OpenAI } from "openai";
//keep secret keys and configs in .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors()); // allow requests from the frontend during development

//default route
app.get("/", (req, res) => {
  const workout = req.query.workout || true;
  const productivity = req.query.productivity || 6;
  res.send({ verdict: `workout:${workout} and productivity${productivity}` });
});

app.post("/get-verdict", async (req, res) => {
  console.log("Received request with query:", req.query);
  const workout = req.query.workout || true;
  const productivity = req.query.productivity || 6;
  const prompt = `
  You are a the system from solo leveling without making any sounds and with the only possibility of interaction through the phone. 
  If the user didn't do their workout, give a strict punishment.
  If they were productive, give praise.
  put everything in one sentence.
  User workout: ${workout}, productive: ${productivity}
  `;
  try {
    const client = new OpenAI({
      apiKey: "unused", // or process.env.POE_API_KEY
      baseURL: "https://api.llm7.io/v1",
    });

    const chat = await client.chat.completions.create({
      model: "default",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    //sends the AI's response back to frontend
    console.log("verdict: ", chat.choices[0].message);
    res.send({ verdict: chat.choices[0].message.content });
  } catch (error) {
    console.error("Error fetching verdict:", error);
    res.status(500).send("Error fetching verdict");
  }
});

app.listen(PORT, () => {
  console.log(`your story begins from port: ${PORT}`);
});
