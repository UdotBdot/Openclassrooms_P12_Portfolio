import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const port = 8080;

const captchaPrivate = import.meta.env.VITE_PRIVATE_CAPTCHA

app.use(cors());
app.use(express.json());

app.post('http://localhost:8080/verify', async (request, response) => {
  const { captchaValue } = request.body;
  try {
    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${captchaPrivate}&response=${captchaValue}`
    );
    response.send(data);
  } catch (error) {
    console.error('Error verifying captcha:', error);
    response.status(500).send({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
