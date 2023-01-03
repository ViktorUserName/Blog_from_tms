import { title } from 'process';
import React, { useState } from 'react';
import Post, {Ipost} from '../Post/Post'

interface IpostProps {
    postConfig: Ipost[]
}

const PostList: React.FC<IpostProps> = (postConfig=[]) => {

    return (
        <div>
            {
                postConfig.map((post) =>
                    <Post key={post.title} title={post.title} date={post.date} like={post.like} dislike={post.dislike}/>
                )}
        </div>
    );
};

export default PostList;