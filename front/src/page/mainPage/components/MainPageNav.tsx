import React from 'react';

interface INav {
    navClassName: String,
    ulClassName: String
}

const MainPageNav: React.FC <INav> = ({
    navClassName,
    ulClassName
}) => {
    return (
        <nav className={`${navClassName}`}>
            <ul className={`${ulClassName}`}>
                <li><a href="#">All</a></li>
                <li><a href="#">My favorites</a></li>
                <li><a href="#">Popular</a></li>
            </ul>
        </nav>
    );
};

export default MainPageNav;