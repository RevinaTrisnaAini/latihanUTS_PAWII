var express = require('express');
var router = express.Router();

const PgnController = require('../controllers/pengguna');
router.get("/", PgnController.index); 
router.post("/insert", PgnController.insert); 
module.exports = router;