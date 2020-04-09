const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hotelRoute = require('./routes/hotelRoute')
// middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//routes
app.use('/api', hotelRoute);
// output listening port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});