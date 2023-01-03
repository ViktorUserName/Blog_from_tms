import React from 'react';

export interface Ipost {
    title: string,
    date: string,
    like: number,
    dislike: number
}

const Post: React.FC<Ipost> = ({
    title, date, like, dislike
}) => {

    return (
        <div>
            <img src="" alt="" />
            <p>{date}</p>
            <h3>{title}</h3>
            <div>{like}, {dislike}</div>
        </div>
    );
};

export default Post;