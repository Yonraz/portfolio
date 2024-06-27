import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import FloatingGlass from "../floatingGlass/FloatingGlass";

const Layout: React.FC = () => {
  return (
    <div className="">
      <div className=" w-screen h-screen absolute z-[-1] ">
        <FloatingGlass />
      </div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
