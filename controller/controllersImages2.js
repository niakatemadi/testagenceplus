var Jimp = require('jimp');

const resizeImage2 = (req,res) => {

    let info_image = {

        name: req.files.myfile.name,
        data: req.files.myfile.data

    };

    console.log('into info_image : '+ info_image);

    res.status(200).send('image resized')

    Jimp.read(info_image.name)
    .then(lenna => {
      return lenna
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write('smaller_img'); // save
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {
    resizeImage2
}