import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Schedule from "./Components/Schedule/Schedule";
import Care from "./Components/Care/Care";
import MainBody from "./Components/MainBody/MainBody";
import Navbar from "./Components/Navbar/Navbar";
import Notice from "./Components/Expert/Expert";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainBody></MainBody>}></Route>
        <Route path="/home" element={<MainBody></MainBody>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/schedule" element={<Schedule></Schedule>}></Route>
        <Route path="/care" element={<Care></Care>}></Route>
        <Route path="/expert" element={<Notice></Notice>}></Route>
      </Routes>
    </div>
  );
}

export default App;
