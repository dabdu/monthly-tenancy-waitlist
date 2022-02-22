import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/HomePage/Home';
import AboutPage from './components/AboutPage/AboutPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about-us' element={<AboutPage />} />
        {/* <Route path='/tenant-form' element={<TenantForm />} /> */}
        {/* <Route path='/landlord-form' element={<LandLordForm />} /> */}
      </Routes>
      {/* <About /> */}
      <ToastContainer />
    </>
  );
}

export default App;
