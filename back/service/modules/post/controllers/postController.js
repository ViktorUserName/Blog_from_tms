const Post = require('../models/post')

exports.getPost = function(request, response){
    Post.find({}, {_id:0, __v:0}, function(error, data){
        if (error) return error;
        response.send(data)
    })
};

exports.getPostByName = async function(request, response){
    const { id } = request.params;

    const post = await Post.findOne({id}, {_id:0, __v:0});
    if(post){
        response.json(post)
    } else {
        response.send('that kind not')
    }   
}

