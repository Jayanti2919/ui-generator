import * as dotenv from 'dotenv';
import { OpenAIApi, Configuration } from 'openai';
import express from 'express';

dotenv.config();

const router = express.Router();

const config = new Configuration( {
    apiKey: process.env.CHAT_API_KEY,
})

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from Chat"})
})

router.route('/').post(async (req, res) => {
    try {
      const request = req.body;
  
      const response = await openai.createCompletion({
        model: "text-ada-001",
        prompt: "",
        temperature: 0.2,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      const msg = response.data.choices[0].text;
      console.log(msg);
  
      res.status(200).json({ message: msg });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" })
    }
  })

export default router;
