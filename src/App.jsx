import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import './style.css'

function App() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
}

export default App;
