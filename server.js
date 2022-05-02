const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// Middleware

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

// Routers
const resizeImageRouter = require('./routes/resize_img_router.js');

app.use('/images', resizeImageRouter);

// Testing API

app.get('/hello', (req, res) => {
    res.json('Good morning Madi !')
})
// Port

const PORT = process.env.PORT || 8035 ;

// server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


