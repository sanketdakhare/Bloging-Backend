
const Comment = require("../models/commentModdel")
const Post = require("../models/postModel")

exports.createComment = async(req,res)=>{
    try {
        
        const {title,body} = req.body;

        const post = new Post ({
            title,body
        });

        const savedPost = await post.save();

        res.json({
            post:savedPost
        })

        
    } catch (error) {
        return res.status(500).json({
            error:"Error while Creating Comment",
        })
        
    }
}