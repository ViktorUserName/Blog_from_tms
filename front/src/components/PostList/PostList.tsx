import { title } from 'process';
import React, { useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import PostEnam from '../Post/PostEnam';
import s from './PostList.module.scss'

export interface IPost {
    id?: number,
    title?: string,
    date?: string,
    img?: string,
    comments?:[],
    like?: number,
    dislike?: number,
}

interface IpostListProps {
    posts?: IPost[],
    // to: LinkProps
    
}

const PostList: React.FC<IpostListProps> = ({
    posts=[],
    // to
    
    
}) => {

    return (
        <div className={s.listCont}>
            {
                posts.map((post) => {
                    return (
                        <>
                        {/* <Link key={post.id} to={`/articles/${post.id}`}/> */}
                            <PostEnam post={post}/>
                        {/* <Link/> */}
                        {/* ///Property 'to' is missing in type '{}' but required in type 'LinkProps'.ts(2741) */}
                        </>
                    )
                })
            }
        </div>
    );
};

export default PostList;