import React, { useState } from "react";
import { db } from "../../firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
// b3a41c70-dad5-4fc2-a9a9-c9fcf65756c3

function LandLordForm({ toggleLandLordModal }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    property_type: "",
    description: "",
  });
  const [message, setMessage] = useState(`Hi 🤗💃.
We just did our happy dance cause you joined us!

Thank you for choosing The MTP (monthly tenancy plan).

Our goal to ensure your property listing experience is simple, affordable and comfortable, with faster fill up and zero debts.
By joining our waitlist, you'll be the first to know when our product is available.
Sit tight cause something "hooge" is coming.`);
  const navigate = useNavigate();

  const { name, email, phoneNo, address, property_type, description } =
    formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = [];

    if(!name){
      errors.push("Please add your name.")
      toast.error("Please add your name.")
    }else if(name.length > 20){
      errors.push("Your name should be less than 20 chars long.")
      toast.error("Your name should be less than 20 chars long.")
    }
  
    if(!email){
      errors.push("Please add your email.")
      toast.error("Please add your email.")
    }else if( !validateEmail(email)){
      errors.push("Email format is incorrect.")
      toast.error("Email format is incorrect.")
    }
  
  
    if(!phoneNo){
      errors.push("please add your phone number")
      toast.error("please add your phone number")}
    if(!address){
      errors.push("please add your address")
      toast.error("please add your address")}




    if(errors.length >= 1){
      //   toggleTenantModal();
      // navigate(`/`);
      setLoading(false);
        toast.error(errors);
        return
    }
  





    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(db, "landlords"), formDataCopy);
    await emailjs
      .sendForm(
        "service_voqvul9",
        "template_es9r2la",
        e.target,
        "user_PU4yIgB5T0kOs9KDRsjcJ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    toast.success("Registration Completed Successfully");
    toggleLandLordModal();
    navigate(`/`);
  };
  if (loading) {
    return <Spinner />;
  }


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  return (
    <>
      <div className="formContainer">
        
        <form id="LandLordForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name/Company<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input input"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
            <input
              type="hidden"
              className="form-control custom-input input"
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input input"
              id="email"
              value={email}
              onChange={handleChange}
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">
              Phone Number<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              className="form-control custom-input input"
              id="phoneNo"
              name="phoneNo"
              value={phoneNo}
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">
              State<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input input"
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Enter State"
            />
          </div>
          <div className="form-group">
            <label htmlFor="property_type">Property Type</label>
            <select
              name="property_type"
              className="custom-input input"
              id="property_type"
              value={property_type}
              onChange={handleChange}
            >
              <option value="funished">Furnished</option>
              <option value="unfunished">Unfurnished</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Description<span style={{ color: "red" }}>(optional)</span>
            </label>
            <input
              type="text"
              className="form-control custom-input input"
              id="description"
              value={description}
              onChange={handleChange}
              name="description"
              placeholder="Enter Description"
            />
          </div>
          <br />
          <div className="btn__container">
            <button id="tenantFormBtn" className="form__submit__btn" >
              <center>SUBMIT</center>
            </button>

            <button type="button" id="ttenantFormBtn" className="form__close__btn" onClick={toggleLandLordModal}>
              <center> CLOSE</center>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default LandLordForm;
