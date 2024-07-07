import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logoImage from "../assets/Images/logoimage.svg";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice'
import React from "react";

export default function Navbaar() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className="border-b-2">
      <div className=" flex flex-row gap-2 md:ml-5">
        <img src={logoImage} alt="Logo" />
        <span className="text-Black font-bold text-2xl">Nexcent</span>
      </div>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 sm:inline"
          color="green"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun/>}
        </Button>
        <div className="flex">
          <Link to="/Log-in">
            <Button color="light" border="none">
              Login
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button gradientMonochrome="success">Sign up</Button>
          </Link>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/service">Service</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/feature">Feature</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/product">Product</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/testimonial">Testimonial</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/faq">FAQ</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
