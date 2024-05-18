import './Home.css';
import video from '../../video/adidas.mp4'
import img from '../../img/adi-1.png'
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
 </div>


<div className="card">
 <img src={img} alt="" />
 <i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
 <p>Originals</p>
  </div>

 <div className="card">
 <img src={img} alt="" />
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
   <p>Originals</p>
 </div>
<div className="card">
<img src={img} alt= ""/>
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
<p>Originals</p>
</div>

<div className="card">
<img src={img} alt= ""/>
<i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
<p>Originals</p>
</div>

<div className="card">
 <img src={img} alt= ""/>
 <i className='heart_ic'></i>
 <span className="price">70$</span>
 <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
 <p>Originals</p>
 </div>
</div>
</div> 

</section>
      );
}

export default Home;