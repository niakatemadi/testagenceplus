const sharp = require('sharp');

const resizeImage = (req,res) => {

    let info_image = {

        name: req.files.myfile.name,
        data: req.files.myfile.data

    };


    console.log('into info_image : '+ info_image);

    res.status(200).send('image resized')

    sharp(info_image.name)
  .resize(200, 200)
  .toFile('resized.png', function(err) {
    
    console.log(err)
  });
}

module.exports = {
    resizeImage
}