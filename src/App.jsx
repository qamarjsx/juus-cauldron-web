import React from "react";
import AnimatedRoutes from "./components/utils/AnimatedRoutes.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";

function App() {

  return (
    <div className="relative">
        <ScrollToTop />
        <AnimatedRoutes />
    </div>
  );
}

export default App;
