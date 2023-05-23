import * as dotenv from 'dotenv';
import { OpenAIApi, Configuration } from 'openai';
import express from 'express';

dotenv.config();

const router = express.Router();

const config = new Configuration( {
    apiKey: process.env.IMAGE_API_KEY,
})

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALLE"})
})

export default router;
