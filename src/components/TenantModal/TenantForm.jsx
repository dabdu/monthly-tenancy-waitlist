import React, { useState } from "react";
import { db } from "../../firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

function TenantForm( { toggleTenantModal }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    property_type: "",
    occupation: "",
    description: "",
  });
  const [message, setMessage] = useState(`Hi 🤗💃.
  We just did our happy dance cause you joined us!

  Thank you for choosing The MTP (monthly tenancy plan).

  Our goal to ensure your property listing experience is simple, affordable and comfortable, with faster fill up and zero debts.
  By joining our waitlist, you'll be the first to know when our product is available.
  Sit tight cause something "hooge" is coming.`);
  const navigate = useNavigate();

  const {
    name,
    email,
    phoneNo,
    address,
    property_type,
    occupation,
    description,
  } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(db, "tenants"), formDataCopy);
    await emailjs
      .sendForm(
        "service_voqvul9",
        "template_7xovcrh",
        e.target,
        "user_PU4yIgB5T0kOs9KDRsjcJ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    toast.success("Registration Completed Successfully");

    toggleTenantModal();
    navigate(`/`);
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="formContainer">
       
        <form id="tenantForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input input"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
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
              required
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">
              Phone Number<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control custom-input input"
              id="phoneNo"
              name="phoneNo"
              value={phoneNo}
              onChange={handleChange}
              required
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
              required
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
              <option value="funished">Funished</option>
              <option value="unfunished">Unfunished</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Occupation<span style={{ color: "red" }}>(optional)</span>
            </label>
            <input
              type="text"
              className="form-control custom-input input"
              id="occupation"
              name="occupation"
              value={occupation}
              onChange={handleChange}
              placeholder="Enter Occupation (optional)"
            />
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

            <button id="ttenantFormBtn" className="form__close__btn" onClick={toggleTenantModal}>
              <center> CLOSE</center>
            </button>
          </div>

        </form>
      </div>
    </>
  );
}
export default TenantForm;
