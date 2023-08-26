import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Showcase from "./pages/Showcase";
import HomePage from "./pages/HomePage";
import GalleryMenuPage from "./pages/GalleryMenuPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/gallery-menu/items/deathly-hallows"
            element={<Showcase />}
          />
          <Route path="/gallery-menu" element={<GalleryMenuPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
