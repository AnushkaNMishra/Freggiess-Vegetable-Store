import "./Navbar.css";
import Cookies from "js-cookie";
const Navbar = () => {
  const account = Cookies.get("freggie-firstname") || "Account";
  return (
    <div className="navbar-container">
      <div className="title-container">Freggies</div>
      <div className="links-container">
        <ul className="links">
          <li className="link">
            {" "}
            <a href="/"> Home </a>{" "}
          </li>
          {/* <li className="link"> <a href="/about"> About </a> </li> */}
          {account === "Account" && (
            <li className="link">
              {" "}
              <a href="/login"> Login/SignUp </a>{" "}
            </li>
          )}
          <li className="link">
            {" "}
            <a href="/myaccount"> {account} </a>{" "}
          </li>
          <li className="link">
            {" "}
            <a href="/cart"> Cart </a>{" "}
          </li>
          <li className="link">
            {" "}
            <a href="/fruits"> Fruits </a>{" "}
          </li>
          <li className="link">
            {" "}
            <a href="/vegetables"> Vegetables </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
