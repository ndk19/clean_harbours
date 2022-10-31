const express = require('express');
const cors = require('cors');
require('dotenv').config()

const { PORT } = process.env;

const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hit Homepage');
})


app.listen(PORT, () => { console.log(`Server has begun at port ${PORT}`) });