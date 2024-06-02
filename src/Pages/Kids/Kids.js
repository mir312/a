import './Kids.css';
import video from '../../video/kids.mp4'

function  Kids() {
  return (
    <section className="kids">

 <video className='kids_video' controls autoPlay muted>
   <source src={video} type="kids/mp4"></source>
                  </video>


                  <div className="container">
                  <div className="kids_disney">
                  <h2 className="kids_tit"> ADIDAS | DISNEY :</h2>
                  <h2 className="kids_tit"> THE LION KING</h2>
 <p className="kids_desc">For every brave adventure</p>

 <button className="btn_kids flex">SHOP NOW
 <i className="icon_kids"></i>
 </button>

 </div>


 </div>
 </section>
  );
}

export default Kids;