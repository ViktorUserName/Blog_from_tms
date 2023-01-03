import React from 'react';
import './Posts.scss';
import '../../mixin.scss';

const Posts: React.FC= () => {
    return (
        <section className='post'>
            <div className="wrapper">
                <div className="post-content">
                <h1>Blog</h1>
                <nav className='post__nav'>
                    <ul className='post__nav-ul'>
                        <li><a href="#">All</a></li>
                        <li><a href="#">My favorites</a></li>
                        <li><a href="#">Popular</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </section>
    );
};

export default Posts;