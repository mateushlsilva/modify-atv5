import express = require("express");
import * as dotenv from 'dotenv';
import cors = require("cors");


dotenv.config();

const app = express();


app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    
})