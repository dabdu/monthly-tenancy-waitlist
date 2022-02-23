import React from "react";
import imageOne from "./img1.png";
import imageTwo from "./img2.png";
import imageThree from "./img3.png";
import Header from "../Header/Header";


function AboutPage () {
  return (
    <>
    <section className=" main__about__page__container" id="home">
        
        <div className="about__page">

        <Header />
        
        <h3 className="about__page__title">About Us</h3>
    <div className="about__page__container">
      <div className="about__page__left">
        <h3>Hello!</h3>
          <p>
            The monthly tenancy plan is a property tech platform designed to simplify property rentals, eliminate debts and excess charges, verify tenants and properties, and give access to various services for optimum comfort.
          </p>
          {/* <p className="landlord__property">
            Landlords and propety owners can easily list their properties on the
            MTP, enjoy faster fill-up of properties by verified tenants and easily
            manage rent payments, all while ensuring property seekers have easy
            access to on-demand services and can choose to split rent with
            families, friends or colleagues.
          </p>
           

          <p className="last__paragraph">
            Simply put, property rental has just
            become simpler, more affordable and more comfortable.
          </p> */}
          
        
      </div>


      <div className="about__page__right">

        <div className=" image__one">
          <img
            src={imageOne}
            
            alt=""
          />
        </div>

        <div className=" image__two">
          <img
            src={imageTwo}
            alt=""
          />
        </div>

        <div className=" image__three">
          <img
            src={imageThree}
            
            alt=""
          />
        </div>

        

      </div>


  </div>


<p className="bottom__paragraph">@Monthly Tenancy 2022</p>

        </div>
      </section>
    

    </>
  );
}

export default AboutPage;
