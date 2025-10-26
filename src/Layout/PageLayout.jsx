import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
