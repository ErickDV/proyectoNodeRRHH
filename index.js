//Dependencies
const express = require('express');
const morgan = require('morgan');
const app = express();

//Routers
const user = require('./routes/user');
const employee = require('./routes/employee');

//Middleware
const auth = require('./middleware/auth');
const index = require('./middleware/index');
const notFound = require('./middleware/notFound');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", index);
app.use("/user", user);
app.use(auth);
app.use("/employee", employee);
app.use(notFound);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running...")
});


