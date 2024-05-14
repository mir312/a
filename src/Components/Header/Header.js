import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Icons from '../Icons/Icons';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="Header">
    {/* <div class="Header_br"></div> */}
      <div className="container">
  
        <div className="Head flex">
          <Logo />
          <Menu />
          <Icons />
          <div className="Buttons flex">
            <Button>Login</Button>
            <Button>Sign In</Button>
          
          </div>
          <Link to="/cart" className="Cart_ic">
            <span></span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;