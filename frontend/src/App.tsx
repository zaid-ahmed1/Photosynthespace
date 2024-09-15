import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Landing } from "./pages";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Plant from "./pages/Plant";
import Water from "./pages/Water";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <NavBar />
        <Routes location={location} key={location.key}>
          <Route index element={<Landing />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/water" element={<Water />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
