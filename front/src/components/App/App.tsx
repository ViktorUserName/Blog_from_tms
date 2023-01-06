import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../page/mainPage/MainPage';
import Header from '../Header/Header';
import './App.module.scss';
// import { IPost } from '../PostList/PostList';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<MainPage/>}/> // Article list page
            {/* <Route path='/:postId' element={<Post post={}/>}/> */}
            <Route path='*' element={<div>Wrong page</div>}/>
          </Routes>
    </BrowserRouter>
     );
}

export default App;