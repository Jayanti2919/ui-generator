import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoute from './routes/dalle.routes.js';


dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limits:'50mb'}));

app.use('/api/dalle', dalleRoute)

app.listen(8080, ()=>console.log("Server is running!"));