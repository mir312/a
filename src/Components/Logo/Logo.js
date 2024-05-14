import './Logo.css';
import logo from '../../img/adidas.png'


function Logo() {
  return (
    <a href="index.html" className="logo">
		<img src={logo}alt=""/></a>
  );
}

export default Logo;