import React, { useState } from "react";
import  Alldata from "./Alldata";
import "./portfolio.css";
import Image3 from "../../assets/iti-ecommerce.png";
import Image4 from "../../assets/work4.jpg";
import Image5 from "../../assets/work5.jpg";
import finalproject from "../../assets/final-project.png";
import ecompharmacy from "../../assets/ecommerce-pharmacy-min.png";

const Portfolio = () => {
  const [port, setport] = useState(1);

  return (
    <div className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most projects</span>

      <div className="portfolio__container container grid">
        <div className="portfolio__tabs">
          <button
            className={port === 1 ? "button-active" : "portolio__tabs-button"}
            onClick={() => {
              setport(1);
            }}
          >
            All
          </button>

          <button
            onClick={() => {
              setport(2);
            }}
            className={port === 2 ? "button-active" : "portolio__tabs-button"}
          >
            Web
          </button>
          <button
            onClick={() => {
              setport(3);
            }}
            className={port === 3 ? "button-active" : "portolio__tabs-button"}
          >
            React
          </button>
          <button
            onClick={() => {
              setport(4);
            }}
            className={port === 4 ? "button-active" : "portolio__tabs-button"}
          >
            Certificates
          </button>
        </div>
        <div className={port===1?"portfolio__all-show":"portfolio__all-hide"}>
          < Alldata/>

        </div>
            {/* web */}
            <div className={port===2?"portfolio__web-show":"portfolio__web-hide"}>
           <div className="box">
               <div className="box__img-web"><img src={Image4} alt=""/></div>  
               <h4 className="title__project">Web app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           <div className="box">
               <div className="box__img-web"><img src={Image5} alt=""/></div>  
               <h4 className="title__project" >Weather app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           </div>
              {/* React */}
              <div className={port===3?"portfolio__web-show":"portfolio__web-hide"}>
           <div className="box">
               <div className="box__img-react"><img src={finalproject} alt=""/></div>  
               <h4 className="title__project">Graduation Project</h4> 
               <div>Languages: (HTML - CSS  - BootStrap - React - Context api -(react-router-dom))  </div>
               <h5> <a href="https://ahmedgawish10.github.io/graduateproject/" target="_blank"> Demo</a> </h5>            
           </div>
           <div className="box">
               <div className="box__img-react"><img src={ecompharmacy} alt=""/></div>  
               <h4 className="title__project">E-commerce Pharmacy</h4> 
               <div>Languages: (HTML - CSS  - BootStrap - React - ReaduxToolkit -(react-router-dom) - (slick-carousel))  </div>
               <h5> <a href="https://ahmedgawish10.github.io/ecommerce-pharmacy4/" target="_blank"> Demo</a> </h5>            
           </div>
           </div>
                {/* Certificates  */}
              <div className={port===4?"portfolio__web-show":"portfolio__web-hide"}>
           <div className="box">
               <div className="box__img-cert"><img src={Image3} alt=""/></div>  
               <h4 className="title__project">Web app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           <div className="box">
               <div className="box__img-cert"><img src={ecompharmacy} alt=""/></div>  
               <h4 className="title__project" >Weather app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
          
           </div>
          
      
      </div>
    </div>
  );
};

export default Portfolio;
