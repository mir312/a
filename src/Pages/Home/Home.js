import './Home.css';
import video from '../../video/adidas.mp4'
import img from '../../img/adi-1.png'
// import video from  '../../video/adi-women.mp4'
// import img from '../../img/icons/heart.svg'


function Home() {
      return (
      <section className="home">
      <video className='video' controls autoPlay muted>
   <source src={video} type="video/mp4"></source>
                  </video>

<div className="container">
 <h3 className="sec_home">Still Interested?</h3>

<div className="cards flex">
 <div className="card">
 <img className='home_img' src={img} alt="" />
 <i className='heart_ic'></i>
 <span className="price">70$</span>
  <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
<p>Originals</p>
<a href="" className="shop_now">
      SHOP NOW
 </a>
 </div>


<div className="card">
 <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a6a1ecb378204fc6a5a3571b1a3a973e_9366/Samba_OG_Shoes_Kids_White_IE3677_01_standard.jpg"alt="" />
 <i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Samba</h4></a>
 <p>Originals</p>
 <a href="" className="shop_now">
      SHOP NOW
 </a>
  </div>

 <div className="card">
 <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/316f56cbdc7c4bf483081e81d37143c9_9366/GAZELLE_Green_IF7154_01_standard.jpg"alt="" />
<i className='heart_ic'></i>
 <span className="price">100$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
   <p>Originals</p>
   <a href="" className="shop_now">
      SHOP NOW
 </a>
 </div>
<div className="card">
<img src= "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70327c21824a42358f8fb1bac58f7797_9366/Gazelle_Bold_Shoes_Red_ID6990_01_standard.jpg" alt= ""/>
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
<p>Originals</p>
<a href="" className="shop_now">
      SHOP NOW
 </a>
</div>

<div className="card">
<img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/91fa955f44f54f3bb9f3634bca6ecb5f_9366/Gazelle_Manchester_United_Shoes_Red_IE8503_01_standard.jpg"/>
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
<p>Originals</p>
<a href="" className="shop_now">
      SHOP NOW
 </a>
</div>

<div className="card">
<img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e745acb29cd248e8994a6820a4ac6a29_9366/Gazelle_Shoes_Yellow_IF5937_01_standard.jpg" alt= ""/>
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
<p>Originals</p>
<a href="" className="shop_now">
      SHOP NOW
 </a>
</div>


</div>

<div className="brends">
     <h4 className="home_txt">Popular right now</h4>
     <div className="brend_adi flex">
          <div className="home_brend">
         <a href=""> <h3 className="brend_txt">samba</h3>
       <div className="home_border"></div></a>
          </div>

          <div className="home_brend">
         <a href=""> <h3 className="brend_txt">campus</h3>
       <div className="home_border"></div></a>
          </div> 

          <div className="home_brend">
         <a href=""> <h3 className="brend_txt">gazelle</h3>
       <div className="home_border"></div></a>
          </div>

          <div className="home_brend">
         <a href=""> <h3 className="brend_txt">messi</h3>
       <div className="home_border"></div></a>
          </div>

          <div className="home_brend">
         <a href=""> <h3 className="brend_txt">ultraboost</h3>
       <div className="home_border"></div></a>
          </div>

          <div className="home_brend">
         <a href=""> <h3 className="brend_txt">nmd</h3>
       <div className="home_border"></div></a>
          </div>
           </div>
    </div>

   

</div> 
<div className="text_text ">
     <div className="container">
 <div className="home_grey flex">
     <div className="txt_grey">
          <h4 className="home_txt">Stories, style, and sporting goods at adidas, since 1949</h4>
          <p className="home_desk">Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. Athletes inspire us. They help us to get up and get moving. And sporting goods featuring the latest technologies help us beat our personal best. adidas is home to the runner, the basketball player, the soccer kid, the fitness enthusiast, the yogi. And even the weekend hiker looking to escape the city. The 3-Stripes are everywhere and anywhere. In sports. In music. On life’s stages. Before the whistle blows, during the race, and at the finish line. We’re here to support creators. To improve their game. To live their lives. And to change the world.</p>
<p className="home_desk-2">
adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sporting goods, style and clothing that match the athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</p>
     </div>

     <div className="txt_grey">
          <h4 className="home_txt">Workout clothes, for any sport</h4>
          <p className="home_desk">adidas designs for athletes of all kinds. Creators who love to change the game. People who challenge conventions, break the rules, and define new ones. Then break them all over again. We design sports apparel that gets you moving, winning, and living life to the fullest. We create bras and tights for female athletes who play just as hard as the men. From low to high support. Maximum comfort. We design, innovate and iterate. We test new technologies in action. On the field, the track, the court, and in the pool. We’re inspired by retro workout clothes, creating new streetwear essentials. From NMD and Ozweego to our Firebird tracksuits. From Stan Smith to Superstar. Classic sports models are brought back to life on the streets and the stages around the world.</p>
<p className="home_desk">
Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sports apparel too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.</p>
     </div>

    </div>
    </div>
    </div>
</section>
      );
}

export default Home;