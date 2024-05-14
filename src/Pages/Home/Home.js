import './Home.css';
import video from '../../video/adidas.mp4'
function Home() {
  return (
  
      <video className='video' controls autoPlay muted>
        <source src={video} type="video/mp4"></source>
      </video>
    
  );
}

export default Home;