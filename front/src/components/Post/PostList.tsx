import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IPost } from '../PostList/PostConteiner';
import axios from 'axios';
import s from './Post.module.scss'

const likeSVG = (<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.292 19.15C18.218 19.636 17.794 20 17.292 20H17.28H7V10.212L10.608 2.094C11.415 2.352 12 3.108 12 4V8C12 8.552 12.447 9 13 9H18.674C18.728 9.002 18.78 9.003 18.832 9.011C19.097 9.051 19.33 9.192 19.488 9.407C19.646 9.622 19.712 9.885 19.672 10.148L18.292 19.15ZM5 20H3C2.449 20 2 19.551 2 19V12C2 11.448 2.449 11 3 11H5V20ZM21.099 8.22C20.623 7.575 19.925 7.154 19.132 7.033C18.972 7.009 18.814 7.004 18.66 7H14V4C14 1.794 12.206 0 10 0C9.605 0 9.247 0.233 9.086 0.593L5.35 9H3C1.346 9 0 10.345 0 12V19C0 20.654 1.346 22 3 22H17.269H17.304C18.776 22 20.048 20.909 20.269 19.451L21.648 10.45C21.77 9.657 21.574 8.866 21.099 8.22Z" fill="#313037"/>
                </svg>);
const dislikeSVG = (<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3665 9.924C20.2535 10.552 19.6965 11.013 19.0365 11.001H17.3665V2.001H19.0545C19.6965 1.952 20.2525 2.448 20.3665 3.077V9.924ZM15.3665 11.788L11.7585 19.906C10.9515 19.648 10.3665 18.891 10.3665 18.001V14.001C10.3665 13.448 9.91853 13.001 9.36653 13.001H3.69753C3.65153 12.998 3.59053 12.999 3.53353 12.99C2.98853 12.907 2.61253 12.396 2.69453 11.852L4.07553 2.851C4.14953 2.361 4.60153 2.022 5.08653 2.001H15.3665V11.788ZM22.3575 2.866C22.1355 1.223 20.7305 0 19.0945 0C19.0755 0 19.0555 0 19.0365 0.001H5.09753C3.61053 0.011 2.32053 1.081 2.09853 2.549L0.717531 11.551C0.470531 13.186 1.59853 14.718 3.23053 14.966C3.39053 14.991 3.55353 15.003 3.70653 15.001H8.36653V18.001C8.36653 20.207 10.1605 22.001 12.3665 22.001C12.7625 22.001 13.1195 21.768 13.2805 21.407L17.0155 13.001H19.0185C20.6885 13.006 22.1325 11.798 22.3575 10.135C22.3635 10.091 22.3665 10.046 22.3665 10.001V3.001C22.3665 2.956 22.3635 2.911 22.3575 2.866Z" fill="#313037"/>
                </svg>)


interface IPostProps {
    post: IPost
}
const PostEnam: React.FC <IPostProps> = ({
    post
}) => {
    // const [postInfo, setPostInfo] = useState<IPost>({
    //     like: 0, dislike: 0
    // });

    //  postId = Number(postId)
    
    
    
    
    // useEffect( () => {
    //     const loadInfo = async () => {
    //         const response = await axios.get(`http://localhost:3001/api/post/${postId}`);
    //         const newPostInfo = response.data;
    //         setPostInfo(newPostInfo);
    //     }
    // }, []);
    

    // const addLike = async () => {
    //     const response = await axios.put(`http://localhost:3001/api/post/${postId}/like`);
    //     console.log(response)
    //     console.log(postId);
    //     const updatePostInfo = response.data;
    //     setPostInfo(updatePostInfo);
    // }


    return ( 
            <div className={s.main}>
                <img src={post.img} alt="" />
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <div className={s.mainLD}>
                <div><button>{likeSVG} {post.like}</button></div>
                    <div><button>{dislikeSVG}</button> {post.dislike}</div>
                </div>
            </div>
    );
};

export default PostEnam;