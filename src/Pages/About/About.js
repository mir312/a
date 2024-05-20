
import './About.css';
import video from '../../video/adidas-2.mp4' 
import img from '../../img/about-3.jpeg'
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
      <p className='video-txt'>WITHOUT A BEAUTIFUL PLANET
THERE IS NO BEAUTIFUL GAME,
FOR THE PLACES WE PLAY.</p> 
        
 <div className="container">
<div className="commitment flex">
 
<video className='video-3' controls autoPlay muted>
   <source src= "https://res.cloudinary.com/adidas-app/video/upload/q_auto:good/v1/page-assets/40/bb3q62lxs9x2xz9eqpwr.mp4" poster="https://res.cloudinary.com/adidas-app/image/upload/c_limit,h_2532,q_auto:good,w_2532/v1/page-assets/40/nvvl4fzzg2hoaux9krvs.jpeg" preload="metadata" crossorigin="anonymous" autoplay="" loop="" preload ="metadata" crossorigin="anonymous" playsinline="" type="video/mp4"></source>
          </video>
          
<div className="about_txt">
          <h2 className="sec_about">OUR COMMITMENT</h2>
          <p className="desc_about">We’re transforming our business to help reduce our impact. And we’re on a mission to innovate further</p>
          </div>
</div>

    <div className="sport flex">
      <div className="sport_txt">
      <h2 className="sec_about">WE STRIVE TO MAKE SPORT MORE EQUITABLE</h2>
      </div>
      <div className="sport_img">
      <img src={img} alt="" />
      </div>
      <div className="sport_p">
      <h4 className="sec_sport">We ensure sport reflects and celebrates the communities and marketplace we serve.</h4>
      <p className="sec_desk">It is our ambition that everyone experiences fair play and equal representation in sport, whether on and off the pitch or in the locker rooms and beyond.</p>
    </div>
  </div>


  .
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
