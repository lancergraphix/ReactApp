import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/components.css';
import './css/global.css';
import './css/layout.css';
import './css/sample-wallpaper.css';
import Header from './components/Header';
import ImageCard from './components/imageCard';
import SearchInput from './components/searchInput';

function App() {
  return (
    <React.Fragment>
    <Header/>
    <ImageCard/>
   

    </React.Fragment>
  );
}

export default App;
