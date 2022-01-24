import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Navigate, Routes, useLocation } from "react-router-dom";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import Projects from "./components/Project/Project";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />

            <div>
              <Routes location={location} key={location.key}>
                <Route exact path="/" element={<About/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route element={<Navigate to="/" />} />
              </Routes>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
