import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const MainLayout = () => {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <Header />
        <Outlet />
        <Navigation />
      </div>
    </>
  );
};

export default MainLayout;
