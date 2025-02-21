const dotenv = require('dotenv');
dotenv.config();

const exp = require('express');
const cors = require('cors');
const cookieparser=require('cookie-parser')
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.route');

connectToDb();
const app = exp();

app.use(cors());
app.use(exp.json());
app.use(cookieparser())
app.use(exp.urlencoded({ extended: true })); // Corrected this line

app.get('/', (req, res) => {
    res.send('hello Arpit');
});

app.use('/user', userRoutes);

module.exports = app;

