import React, { useState, useEffect } from 'react';
import PostList, { IPost } from '../../components/PostList/PostList';
import s from './MainPage.module.scss';
import axios from 'axios';

const MainPage = () => {
    const [post, setPost] = useState<IPost[]>([{
        like:0, dislike: 0, comments:[]
    }])
   
    const getPosts = async () => {
        const response = await axios.get(`http://localhost:3001/api/post`)
            const newPostInfo = response.data;
            setPost(newPostInfo)
    }

    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div className={s.main}>
            <div className="wrapper">
                <h1 className={s.mainH1}>
                    Blog
                </h1>
                <nav className={s.mainNav}>
                    <ul className={s.mainNavUl}>
                        <li><a href="#">All</a></li>
                        <li><a href="#">My favorites</a></li>
                        <li><a href="#">Popular</a></li>
                    </ul>
                </nav>
                <PostList posts={post}/>
            </div>
        </div>
    );
};

export default MainPage;