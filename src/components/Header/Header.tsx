import React from 'react';
import './Header.scss';
import itemSvg from '../../img/search_1.svg';
import ava from '../../img/ava.svg';


const Header: React.FC = () => {
    return (
        <main>
                <div className="header-content">
                    <nav className="header-burger">
                        <div className="header-burger-cont">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className="header__menu">
                            <li className="header__menu-li">Main</li>
                            <li className="header__menu-li">Lorum</li>
                            <li className="header__menu-li">Ipsum</li>
                        </ul>
                    </nav>
                    <div className="header-search-name">
                        <div className="header__search">
                            <img src={itemSvg} alt="" />
                        </div>
                        <div className="header__name">
                            <img src={ava} alt="" className="" />
                            <div>Artem Malkin</div>
                        </div>
                    </div>
                </div>
        </main>
    );
};

export default Header;