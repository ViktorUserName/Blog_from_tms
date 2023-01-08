const Post = require('../models/post')

exports.getPost = function(request, response){
    Post.find({}, {_id:0, __v:0}, function(error, data){
        if (error) return error;
        response.send(data)
    })
};

exports.getPostByName = async function(request, response){
    const { id } = request.params;

    const post = await Post.findOne({id}, {_id:0, __v:0, mainText:0});
    if(post){
        response.json(post)
    } else {
        response.send('that kind not')
    }   
};

exports.putLike = async function(request, response) {
    const { id } = request.params;
    // const id = request.id

    await Post.updateOne({ id }, {
        $inc: {
            like: 1
        }
    })
    
    const post = await Post.findOne({ id });

    if (post) {
        response.send(post)
    } else {
        response.send('put like not work')
    }
}
exports.putDislike = async function(request, response) {
    const { id } = request.params;

    await Post.updateOne({ id }, {
        $inc: {
            dislike: 1
        }
    })
    
    const post = await Post.findOne({ id });

    if (post) {
        response.send(post)
    } else {
        response.send('put dislike not work')
    }
}

