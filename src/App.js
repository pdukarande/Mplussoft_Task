import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobilecomp from './components/Mobilecomp/Mobilecomp';
import Registration from './components/Registration/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocietyPage from "./components/Society/Society";
import Company from "./components/Company/Company";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="d-lg-flex w-100">
              <div className={`${styles.setreality1} col-lg-8 container`}>
                <Registration />
              </div>
              <div className="col-lg-4 d-flex align-items-center justify-content-center">
                <Mobilecomp />
              </div>
            </div>
          } />
          <Route path="/society" element={
            <div className="d-lg-flex w-100">
              <div className={`${styles.setreality2} col-lg-8 container`}>
                <SocietyPage />
              </div>
              <div className="col-lg-4 d-flex mt-5 mt-lg-0  justify-content-center">
                <Mobilecomp />
              </div>
            </div>
          } />
          <Route path="/company" element={
            <div className="d-lg-flex w-100">
              <div className={`${styles.setreality2} col-lg-8 container`}>
                <Company />
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0 d-flex  justify-content-center">
                <Mobilecomp />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
