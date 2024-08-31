

const express = require('express')

const router = express.Router();

//import controller
const{createComment} = require("../controllers/CommentController")
const{}



// create mapping 
router.post("/comments/create",createComment);


//export

module.exports = router;

