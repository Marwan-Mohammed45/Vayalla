import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import Home from "./Pages/Home";
import Categories from "./Pages/categories";
import Religious from "./Pages/religious";
import Historical from "./Pages/Historical";
import Cultural from "./Pages/Cultural";
import Entertainment from "./Pages/Entertainment";
import Natural from "./Pages/Natural";

import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Faq from "./Pages/Faq";

import Makka from "./Pages/makka";
import Madina from "./Pages/Madina";
import Uhed from "./Pages/jabalDetail";
import Saleh from "./Pages/salehdetails";
import Masmak from "./Pages/masmakdetail";
import Qarah from "./Pages/Qarah";
import Museum from "./Pages/Museum";
import Ithara from "./Pages/ithara";
import Diriyah from "./Pages/Diriyah";
import Riyadzoo from "./Pages/riyadhzoo";
import Alshalall from "./Pages/Allshalall";
import Sportcity from "./Pages/Spotrcity";
import Rub from "./Pages/Rub ";
import Farasan from "./Pages/Farasan";
import AlSoudah from "./Pages/Al-Soudah";

// Layout مع التحكم في إظهار الفوتر
const Layout = () => {
  const location = useLocation();

  const hideFooterRoutes = [
    "/makka",
    "/faq",
    "/religious",
    "/historical",
    "/natural",
    "/cultural",
    "/entertainment",
    "/categories",
    "/madena",
    "/jabalDetail",
    "/masmakdetail",
    "/salehdetails",
    "/qarah",
    "/museum",
    "/ithra",
    "/diriyah",
    "/riyadhzoo",
    "/allshalall",
    "/sportcity",
    "/rub",
    "/farasan",
    "/alsoudah"
  ];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
};

// استبدال createBrowserRouter بـ createHashRouter
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="religious" element={<Religious />} />
      <Route path="historical" element={<Historical />} />
      <Route path="cultural" element={<Cultural />} />
      <Route path="entertainment" element={<Entertainment />} />
      <Route path="natural" element={<Natural />} />
      <Route path="makka" element={<Makka />} />
      <Route path="madena" element={<Madina />} />
      <Route path="jabalDetail" element={<Uhed />} />
      <Route path="masmakdetail" element={<Saleh />} />
      <Route path="salehdetails" element={<Masmak />} />
      <Route path="qarah" element={<Qarah />} />
      <Route path="museum" element={<Museum />} />
      <Route path="ithra" element={<Ithara />} />
      <Route path="diriyah" element={<Diriyah />} />
      <Route path="riyadhzoo" element={<Riyadzoo />} />
      <Route path="allshalall" element={<Alshalall />} />
      <Route path="sportcity" element={<Sportcity />} />
      <Route path="rub" element={<Rub />} />
      <Route path="farasan" element={<Farasan />} />
      <Route path="alsoudah" element={<AlSoudah />} />
      <Route path="faq" element={<Faq />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
