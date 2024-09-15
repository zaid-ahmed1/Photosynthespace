import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Landing } from "./pages";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <NavBar />
        <Routes location={location} key={location.key}>
          <Route index element={<Landing />} />
        </Routes>

        {/*
                        <Route index element={<Landing />} />
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="projects/:slug"
                            element={<ProjectPage />}
                        />
                        <Route path="*" element={<NotFound />} />
                    <Footer /> */}
      </AnimatePresence>
    </>
  );
}

export default App;
