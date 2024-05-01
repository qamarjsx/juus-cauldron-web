import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import Shop from "./components/pages/Shop/Shop.jsx";
import FAQs from "./components/pages/FAQs/FAQs.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import NotFound from "./components/pages/NotFound/NotFound.jsx";
import NovaShop from "./components/pages/NovaShop/NovaShop.jsx";
import JuusShop from "./components/pages/JuusShop/JuusShop.jsx";
import Test from "./components/pages/Test/Test.jsx";
import NovaHome from "./components/pages/NovaHome/NovaHome.jsx"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/nova-products" element={<NovaShop />} />
      <Route path="shop/juus-products" element={<JuusShop />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="nova" element={<NovaHome />} />
      <Route path="test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
