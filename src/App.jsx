import { Outlet } from "react-router-dom";
import Header from "./components/utils/Header";

function App() {
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
