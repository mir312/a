import './Kids.css';
import video from '../../video/kids.mp4'

function  Kids() {
  return (
    <section className="kids">
 
 <video className='kids_video' controls autoPlay muted>
   <source src={video} type="kids/mp4"></source>
                  </video>
                  <h2 className="kids_title"> ADIDAS|DISNEY:THE LION KING</h2>
 <p className="kids_desk">For every brave adventure</p>

 <button className="btn_kids">SHOP NOW</button>
 <div className="container">

 </div>
 </section>
  );
}

export default Kids;