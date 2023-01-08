import React, { useState, useEffect } from 'react';
import PostList, { IPost } from '../../components/PostList/PostConteiner';
import s from './MainPage.module.scss';
import axios from 'axios';
import MainPageNav from './components/MainPageNav';
import { useParams } from 'react-router-dom';

const MainPage = () => {
    const [postInfo, setPostInfo] = useState<IPost[]>([{
         like:0, dislike: 0, comments:[]
    }])

    // const { postId } = useParams()
    // const post = postInfo.find( post => post.id.toString() === postId)
   
    const getPosts = async () => {
        const response = await axios.get(`http://localhost:3001/api/post`)
            const newPostInfo = response.data;
            
            setPostInfo(newPostInfo)
    }

    useEffect(() => {
        getPosts()
    }, [])

    // if(!post){
    //     return (
    //         <div>This post is doesnt exist</div>
    //     )
    // }

    return (
        <div className={s.main}>
            <div className="wrapper">
                <h1 className={s.mainH1}>
                    Blog
                </h1>
                <MainPageNav navClassName={s.mainNav} ulClassName={s.mainNavUl}/>
                <PostList posts={postInfo}/>
            </div>
        </div>
    );
};

export default MainPage;