import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import TenantForm from "./TenantForm";

import Close from "../assets/svg/close.svg"


const TenantModal = ({ tenantModal, toggleTenantModal }) => {
    return ( 
        <Modal show={tenantModal}  >
            
            <Modal.Body className="modal__body">
                <div className="form-header">
                    <h4>
                        <center>JOIN OUR WAITLIST</center>
                    </h4>
                </div>

                <div className="close" onClick={toggleTenantModal}>
                    <h1 className="close__icon">X</h1>
                </div>
                <div className="form__main__container">
                    <div className="form__container">
                        <TenantForm toggleTenantModal={toggleTenantModal}/>

                    </div> 
                </div>               
            </Modal.Body>
        </Modal>
     );
}
 
export default TenantModal;