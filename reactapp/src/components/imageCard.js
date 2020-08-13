import React from 'react';
import Venom from './img/venom-1.jpg';
import Galactus from './img/galactus.jpg';
import Hulk from './img/hulk-1.jpg';
import Thanos from './img/thanos.jpg';
import Rashid from './img/rashid.jpg';


function ImageCard() {
    return(
    <div>
         <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div class="search-bar">
          <input type="search" placeholder="Search" />
        </div>

       
        <div class="sample-wallpaper">

        <article class="wallpaper">
            <img src={Rashid} alt="Wallpaper #1" class="wallpaper" />
          </article>

        
          <article class="wallpaper">
            <img src={Venom} alt="Wallpaper #1" class="wallpaper" />
          </article>

          <article class="wallpaper">
            <img src={Galactus} alt="Wallpaper #1" class="wallpaper" />
          </article>

          
          <article class="wallpaper">
            <img src={Hulk} alt="Wallpaper #1" class="wallpaper" />
          </article>

          <article class="wallpaper">
            <img src={Thanos} alt="Wallpaper #1" class="wallpaper" />
          </article>

       
        </div>
      </div>
    </header>
    </div>
    )
}

export default ImageCard;