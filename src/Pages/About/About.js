
import './About.css';
import video from '../../video/adidas-2.mp4' 
function About() {
  return (
    <section className="about">
        <div className="black">
            <ul className="black_link flex">
              <a href=""><li>IMPACT</li></a>
             <a href=""> <li>PEOPLE</li></a>
              <a href=""><li>PLANET</li></a>
            </ul>
          </div>

          <div className="grey">
            <ul className="grey_link flex">
       <a href=""><li>OUR MISSION</li></a>
     <a href=""> <li>CHANGE MATERIALS</li></a>
      <a href=""><li>WEAR LONGER</li></a>
      <a href=""><li>REDUCE FOOTPRINT</li></a>
       <a href=""><li>MOVE FOR THE PLANET</li></a>
            </ul>
          </div>
<video className='video-2' controls autoPlay muted>
   <source src="https://res.cloudinary.com/adidas-app/video/upload/q_auto:good/v1/feed-assets/qja4xzctlcgydnqqsyjl.mp4" autoplay="" loop="" preload="metadata" crossorigin="anonymous" playsinline="" type="video/mp4"></source>
          </video>
        
 <div className="container">
 {/* <video className='video-2' controls autoPlay muted>
   <source src={video} type="video/mp4"></source>
                  </video> */}

{/* <video class="video-2" src="https://res.cloudinary.com/adidas-app/video/upload/q_auto:good/v1/feed-assets/qja4xzctlcgydnqqsyjl.mp4" autoplay="" loop="" preload="metadata" crossorigin="anonymous" playsinline="" ></video> */}

          <p className='video-txt'>WITHOUT A BEAUTIFUL PLANET
THERE IS NO BEAUTIFUL GAME,
FOR THE PLACES WE PLAY.</p> 
    <div className="cont flex">

      <div className="card">
        <div className="imgBx">
          <img className='shoes' src="https://assets.codepen.io/4164355/shoes.png" />

          {/* <img src="https://kinash.ru/pictures/product/middle/248979_middle.jpg"/> */}
        </div>
        <div className="contentBx">
          <h2 >Adidas Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>


      <div className="card">
        <div className="imgBx">
          <img className='shoes' src="https://assets.codepen.io/4164355/shoes.png" />

          {/* <img src="https://kinash.ru/pictures/product/middle/248979_middle.jpg"/> */}
        </div>
        <div className="contentBx">
          <h2 >Adidas Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>

      <div className="card">
        <div className="imgBx">
          <img className='shoes' src="https://assets.codepen.io/4164355/shoes.png" />

          {/* <img src="https://kinash.ru/pictures/product/middle/248979_middle.jpg"/> */}
        </div>
        <div className="contentBx">
          <h2 >Adidas Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>

    </div>
    </div>
    </section>

  );

}

  {/* <div className="about ">
    
    <h2 className="sec_tit">Still Interested?</h2>   

   <div className="cards flex">
    
    <div className="card"><img src="img/adi-1.png" alt="" /></div>
   <a href=""><h3 className="sec_about">SUPERSTAR</h3></a>
<p>Style that steals the now </p>
<a href="" className="shop">SHOP NOW</a>
   </div>

    </div> */}



export default About;
