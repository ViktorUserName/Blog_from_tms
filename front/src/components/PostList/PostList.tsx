import { title } from 'process';
import React, { useState } from 'react';
import Post from '../Post/Post'

export interface IPost {
    title?: string,
    date?: string,
    comments:[],
    like?: number,
    dislike?: number
}
interface IpostListProps {
    posts?: IPost[]
}

const PostList: React.FC<IpostListProps> = ({
    posts=[]
}) => {

    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <Post 
                            post={post}
                        />
                    )
                })
            }
        </div>
    );
};

export default PostList;