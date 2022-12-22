import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Pakistan from "./components/regions/Pakistan";
import Home from "./components/Home";
import ComingSoon from "./components/regions/ComingSoon";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/pak" element={<Pakistan />} />
        <Route path="/sa" element={<ComingSoon />} />
        <Route path="/usa" element={<ComingSoon />} />
        <Route path="/me" element={<ComingSoon />} />
        <Route path="/eu" element={<ComingSoon />} />
        <Route path="/aus" element={<ComingSoon />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
