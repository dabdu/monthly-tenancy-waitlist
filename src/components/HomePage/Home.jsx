import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import LandLordModal from "../LandLordModal/LandLordModal";
import TenantModal from "../TenantModal/TenantModal";
import location from "../assets/svg/location.svg";


// Service ID = service_hn0t09s


function Home() {

  const [tenantModal, setTenantModal] = useState(false)
  const [landLordModal, setLandLordModal] = useState(false)

  const toggleTenantModal = () => setTenantModal(!tenantModal)
  const toggleLandLordModal = () => setLandLordModal(!landLordModal)

  const toggleModalFalse = () => {
    setTenantModal(!tenantModal)
    setLandLordModal(!landLordModal)
  }



  return (
    <div className="homepage__main__container">
      <section className="homepage__container" 
        // onClick={toggleModalFalse}
        >

          <Header />

          <TenantModal 
            toggleTenantModal={toggleTenantModal} 
            tenantModal={tenantModal}
            // toggleModalFalse={toggleModalFalse}
            />
          <LandLordModal  toggleLandLordModal={toggleLandLordModal} landLordModal={landLordModal}/>

        <div className="title__container">
        <h1 className="heading">
          The Monthly <span className="tenancy__heading">Tenancy</span> 
          
          <h1 className="heading__two" >Plan</h1>
        </h1>
        </div>

        <div className="locations">
          <ul>
            <li>
              <img src={location} alt="" />
            </li>
            <li>Abuja</li>
            <li>
              <span>Lagos</span>
            </li>
            <li>Port Hacourt</li>
          </ul>
        </div>
        <div className="column">
          {/* <div className="image lap-img">
            <img src={homeimg} alt="" />
          </div> */}
          <div className="text__content">
            <h4>
              Join our community today, welcome to simplicity, affordability and
              comfort, welcome to the monthly tenancy plan.
            </h4>
            </div>
            {/* <div className="image phn-img">
              <img src={homeimg} alt="" />
            </div> */}
            <div className="buttons">
              <button  className="tenant__btn" onClick={toggleTenantModal}>
                {" "}
                <i className="fab fa-apple"></i> Tenants{" "}
              </button>
              <button
                
                className="landlord__btn"
                onClick={toggleLandLordModal}
              >
                {" "}
                <i className="fab fa-google-play"></i> Landlords{" "}
              </button>
            </div>
          
        </div>
      </section>
    </ div>
  );
}

export default Home;
