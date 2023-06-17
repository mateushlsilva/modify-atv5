import express = require("express");
import * as dotenv from 'dotenv';
import cors = require("cors");
import routes from "./routes";



dotenv.config();

const app = express();


app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(routes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    
})