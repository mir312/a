
import './Menu.css';
import {Link} from 'react-router-dom'
import '../../img/adidas.png'

function Menu() {
  return (
    
    <nav className='Menu'>
      <ul className='list flex'>
  
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className='about'>
          <Link to="/about">About</Link>
          <ul className='disnon'>
            <li>
            <Link to="/">MEN</Link></li>

          </ul>
          <ul className='disnon'>
            <li><Link to="/">WOMEN</Link></li>
            
          </ul>
          <ul className='disnon'>
            <li><Link to="/">KIDS</Link></li>
            
          </ul>
        </li>
   
        <li>
          <Link to="/delivery">Delivery</Link>
        </li>
        <li>
          <Link to="/sale">Sale</Link>
        </li>

        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
  
      
    </nav>

  );
}

export default Menu;