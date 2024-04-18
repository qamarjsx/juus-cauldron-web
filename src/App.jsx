import { Outlet } from "react-router-dom";
import Header from "./components/utils/Header.jsx";
import Footer from "./components/utils/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
