import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import FloatingGlass from "../floatingGlass/FloatingGlass";

const Layout: React.FC = () => {
  return (
    <div >
      <div className="h-full w-full absolute z-[-1]">
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
