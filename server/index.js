import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoute from './routes/dalle.routes.js';
import chatRoute from './routes/chat.routes.js';


dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limits:'50mb'}));

app.use('/api/dalle', dalleRoute)
app.use('/api/chat', chatRoute)

app.listen(8080, ()=>console.log("Server is running!"));