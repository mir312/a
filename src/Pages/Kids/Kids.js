import './Kids.css';
import video from '../../video/kids.mp4'

function  Kids() {
  return (
    <section className="kids">
 
 <video className='kids_video' controls autoPlay muted>
   <source src={video} type="kids/mp4"></source>
                  </video>
 
 </section>
  );
}

export default Kids;