import React from 'react';
import { IPost } from '../PostList/PostList';

interface IPostProps {
    post: IPost
}

const Post: React.FC<IPostProps> = ({
    post
}) => {

    return (
        <div>
            <img src="" alt="" />
            <p>{post.date}</p>
            <h3>{post.title}</h3>
            <div>{post.like}, {post.dislike}</div>
        </div>
    );
};

export default Post;