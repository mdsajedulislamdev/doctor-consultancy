import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import MainBody from "./Components/MainBody/MainBody";
import Navbar from "./Components/Navbar/Navbar";
import Notice from "./Components/Notice/Notice";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainBody></MainBody>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/notice" element={<Notice></Notice>}></Route>
      </Routes>
    </div>
  );
}

export default App;
