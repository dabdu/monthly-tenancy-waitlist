import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import LandLordForm from "./LandLordForm";



const LandLordModal = ({ landLordModal, toggleLandLordModal }) => {
    return ( 
        <Modal show={landLordModal} size="md">
            <Modal.Body className="modal__body">
            <div className="form-header justify-content-center">
                    <h4>
                        <center>JOIN OUR WAITLIST</center>
                    </h4>
                </div>


                <div className="close" onClick={toggleLandLordModal}>
                        <h1 className="close__icon">X</h1>
                </div>

                <div className="form__main__container">
                    <div className="form__container">
                        <LandLordForm toggleLandLordModal={toggleLandLordModal}/>

                    </div> 
                </div>
            </Modal.Body>
        </Modal>
     );
}
 
export default LandLordModal;