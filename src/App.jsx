import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Showcase from "./pages/Showcase";
import HomePage from "./pages/HomePage";
import GalleryMenuPage from "./pages/GalleryMenuPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery-menu/items/:id" element={<Showcase />} />
      <Route path="/gallery-menu" element={<GalleryMenuPage />} />
    </Routes>
  );
}

export default App;
