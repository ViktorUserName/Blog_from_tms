import { title } from 'process';
import React, { useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import PostEnam from '../Post/PostList';
import s from './PostConteiner.module.scss'

export interface IPost {
    id?: number,
    title?: string,
    date?: string,
    img?: string,
    comments?:[],
    like?: number,
    dislike?: number,
    to?: LinkProps
}

interface IpostListProps {
    posts?: IPost[],
      
}

const PostList: React.FC<IpostListProps> = ({
    posts=[],
}) => {

    return (
        <div className={s.listCont}>
            {
                posts.map((post) => {
                    return (
                        <>
                            <Link key={post.id} to={`${post.id}`}>
                                <PostEnam post={post}/>
                            </Link>
                        </>
                    )
                })
            }
        </div>
    );
};

export default PostList;