import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.post("/cookie", (req, res) => {
  const { cookie } = req.body;
  console.log(`Cookie recibida: ${cookie}`);
  res.status(200).send({
    status: "success",
    code: 200,
    message: "Cookie recibida exitosamente",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
