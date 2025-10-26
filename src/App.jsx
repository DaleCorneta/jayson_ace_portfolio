import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import PageLayout from "./Layout/PageLayout.jsx";
import MoreWork from "./Pages/MoreWork.jsx";
import SingleWork from "./Pages/SingleWork.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/works" element={<MoreWork />} />
          <Route path="/view-work" element={<SingleWork />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
