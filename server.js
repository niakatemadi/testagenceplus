const http = require('http');
const sharp = require('sharp');
const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/transformImage', async(req, res) => {
    const myimg = req.params.image;

    const buffer = await sharp(myimg)
           .resize(req.params.width, req.params.height)
           .jpeg()
           .toBuffer()

           res.header('content-type', 'image/jpeg')
           res.send(buffer);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
