import { Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const PageLayout = () => {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <PageHeader/>
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
