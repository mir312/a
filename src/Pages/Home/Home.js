import './Home.css';
import video from '../../video/adidas.mp4'
import img from '../../img/adi-1.png'
// import img from '../../img/icons/heart.svg'


function Home() {
      return (
      <section className="home">
      <video className='video-2' controls autoPlay muted>
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
 <img src={img} alt="" />
 <i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
 <p>Originals</p>
 <a href="" className="shop_now">
      SHOP NOW
 </a>
  </div>

 <div className="card">
 <img src={img} alt="" />
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
   <p>Originals</p>
   <a href="" className="shop_now">
      SHOP NOW
 </a>
 </div>
<div className="card">
<img src={img} alt= ""/>
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
<p>Originals</p>
<a href="" className="shop_now">
      SHOP NOW
 </a>
</div>

<div className="card">
<img src={img} alt= ""/>
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
<p>Originals</p>
<a href="" className="shop_now">
      SHOP NOW
 </a>
</div>

<div className="card">
 <img src={img} alt= ""/>
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
          <h3 className="brend_txt">samba</h3>
          <div className="home_border"></div>
          </div>
     </div>

</div>
</div> 

</section>
      );
}

export default Home;