import NavBar from "./component/NavBar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
