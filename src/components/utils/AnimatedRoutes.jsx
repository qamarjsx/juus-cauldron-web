import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Shop from "../pages/Shop/Shop.jsx";
import FAQs from "../pages/FAQs/FAQs.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import NovaShop from "../pages/NovaShop/NovaShop.jsx";
import JuusShop from "../pages/JuusShop/JuusShop.jsx";
import NovaHome from "../pages/NovaHome/NovaHome.jsx";
import JuusHome from "../pages/JuusHome/JuusHome.jsx";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/juus" element={<JuusHome />} />
        <Route path="/nova" element={<NovaHome />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="nova/shop" element={<NovaShop />} />
        <Route path="juus/shop" element={<JuusShop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
