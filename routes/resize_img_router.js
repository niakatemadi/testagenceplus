const ControllersImages = require('../controller/controllersImages.js');
const router = require('express').Router();

// redimensionner une image 
router.post('/transformImage', ControllersImages.resizeImage);