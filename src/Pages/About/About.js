
import './About.css';


function About() {
  return (

    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Shoes</title>
            <link rel="stylesheet" href="css/styles.css" />
        </head>
        <body>
          
            <div className="cont">
                <div className="card">
                  <div className="imgBx">
                  <img className='shoes' src="https://assets.codepen.io/4164355/shoes.png"/>

                    {/* <img src="https://kinash.ru/pictures/product/middle/248979_middle.jpg"/> */}
                  </div>
                  <div className="contentBx">
                    <h2 >Adidas Shoes</h2>
                    <div className="size">
                      <h3>Size :</h3>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span>10</span>
                    </div>
                    <div className="color">
                      <h3>Color :</h3>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <a  href="#">Buy Now</a>
                  </div>
                </div>
              </div>
        </body>
    </html>
  );

}

export default About;
