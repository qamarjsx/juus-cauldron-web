import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop.jsx";
// import Home from "../pages/Home/Home.jsx";
// import About from "../pages/About/About.jsx";
// import Shop from "../pages/Shop/Shop.jsx";
// import FAQs from "../pages/FAQs/FAQs.jsx";
// import Contact from "../pages/Contact/Contact.jsx";
// import NotFound from "../pages/NotFound/NotFound.jsx";
// import NovaShop from "../pages/NovaShop/NovaShop.jsx";
// import JuusShop from "../pages/JuusShop/JuusShop.jsx";
// import NovaHome from "../pages/NovaHome/NovaHome.jsx";
// import JuusHome from "../pages/JuusHome/JuusHome.jsx";
// import SlidingMenu from "./SlidingMenu.jsx";
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));
const Shop = lazy(() => import("../pages/Shop/Shop.jsx"));
const FAQs = lazy(() => import("../pages/FAQs/FAQs.jsx"));
const Contact = lazy(() => import("../pages/Contact/Contact.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));
const NovaShop = lazy(() => import("../pages/NovaShop/NovaShop.jsx"));
const JuusShop = lazy(() => import("../pages/JuusShop/JuusShop.jsx"));
const NovaHome = lazy(() => import("../pages/NovaHome/NovaHome.jsx"));
const JuusHome = lazy(() => import("../pages/JuusHome/JuusHome.jsx"));
const SlidingMenu = lazy(() => import("./SlidingMenu.jsx"));

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
        <Route path="menu" element={<SlidingMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
