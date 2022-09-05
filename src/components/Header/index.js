import React from "react";
import "./header.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";

//Mapping through this array to add nav buttons so that overhead code is less
const navBtns = [
  {
    title: "New Blog",
    path: "/new",
  },
  {
    title: "All Blog",
    path: "/all",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const handleRedirect = (path) => navigate(path);
  const redirectHome = () => navigate("/");
  return (
    <div className="header-wrapper">
      <div className="title" onClick={redirectHome} role="button">
        Blog-A-Holic
      </div>
      <div>
        {navBtns.map((btn) => (
          <Button
            key={btn.path}
            onClick={() => handleRedirect(btn.path)}
            className="ms-2"
          >
            {btn.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Header;
