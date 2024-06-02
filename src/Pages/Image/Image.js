import './Image.css';

function Image() {
  return (
    <section className="Image">
    <input type='checkbox' name='' id='zoom_img'/>
    
 
 <label for="zoom_img"><img className='home_img' src={img} alt="" /></label>
 </section>

  );
}

export default Image;