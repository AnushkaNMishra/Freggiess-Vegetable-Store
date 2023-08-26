import "./App.css";
import Contact from "./components/contact/Contact";
import Events from "./components/Events/Events";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer/Footer2";
import Hero from "./components/hero/Hero";
import Myaccount from "./components/myaccount/Myaccount";
import Navbar from "./components/navbar/navbar";
import Sliders from "./components/sliders/Sliders";
import Fruits from "./components/fruits/Fruits";
import Vegetable from "./components/vegetables/Vegetable";
import Cartpage from "./components/cartpage/Cartpage";
import LoginReg from "./components/login/LoginReg";
import { Routes, Route } from "react-router";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Navbar></Navbar>
              <LoginReg></LoginReg>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth loginPath="/login">
              <Navbar></Navbar>
              <Cartpage></Cartpage>
              <Footer></Footer>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myaccount"
          element={
            <RequireAuth loginPath="/login">
              <>
                <Navbar></Navbar>
                <Myaccount></Myaccount>
                <Footer2></Footer2>
              </>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/vegetables"
          element={
            <>
              <Navbar></Navbar>
              <Vegetable></Vegetable>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/fruits"
          element={
            <>
              <Navbar></Navbar>
              <Fruits></Fruits>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <>
              <Navbar></Navbar>
              <Hero></Hero>
              <Sliders type={"fruits"} title={"BEST SELLERS"}></Sliders>
              <Sliders type={"vegetables"} title={"BEST OFFERS"}></Sliders>
              <Sliders type={"Fruits"} title={"KITCHEN MUST HAVE's"}></Sliders>
              <Events></Events>
              <Contact></Contact>
              <Footer></Footer>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
