import React from 'react';
import iti from "../../assets/iti-ecommerce.png";
import compny from "../../assets/portfolio-compny.png";
import Image3 from "../../assets/work3.jpg";
import Image4 from "../../assets/work4.jpg";

const Alldata = () => {
    return (
       <div className="portfolio__all-data">
           <div className="box">
               <div className='box__img'><img src={iti} alt="E-commerce Pizza"/></div>  
               <h4 className="title__project">E-commerce Pizza<br/>Graduation Project at - I T I </h4> 
               <div>Languages: (HTML - Sass - JS - BootStrap - Swiper.js)  </div>
               <h5 className='pt-1'> <a href="https://ahmedgawish10.github.io/iti-ecommerce/" target="_blank"> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div className='box__img'><img src={compny} alt="portfolio company"/></div>  
               <h4 className="title__project">Gawish Company<br/> company for Design Your Website </h4> 
               <div>Languages: (HTML - CSS - JS - BootStrap - Isotope.js)  </div>

               <h5 className='pt-1'> <a href="https://ahmedgawish10.github.io/portfolio-company/"target="_blank"> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4  className="title__project">E-ecomrce shop</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4  className="title__project">Portfolio (JS Vanilia)</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4  className="title__project">Portfolio (JS Vanilia)</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4  className="title__project">Portfolio (JS Vanilia)</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
       </div>
    )
}

export default Alldata
