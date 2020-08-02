

const express = require("express");
const cors = require("cors");
const app = express();
//const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
app.use(cors())

//IMPORT ROUTES
const auth_route = require("./routes/auth")
//env
//dotenv.config();

// CONNECT MONGOOSE TO DB
mongoose.connect(process.env.DB_CONNECT, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    },
    ()=> console.log("connected to db")
)

//MIDDLEWARES
app.use(express.json());

// ROUTE MIDDLEWARES

app.use("/app/user", auth_route);


app.listen( port , ()=> console.log(`and the auth journey begins on port ${port}`))
