import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { FiMenu } from "react-icons/fi";
import { ThemeContext } from "../../context.jsx";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "About", label: "About" },
    { to: "Skills", label: "Skills" },
    { to: "Projects", label: "Projects" },
    { to: "Experience", label: "Experience" },
    { to: "Contact", label: "Contact" },
  ];

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        opacity: "90%",
      }}
      style={{
        background: darkMode
          ? "linear-gradient(to right, #60a5fa, #1e3a8a)"
          : "linear-gradient(to right, white, lightblue)",
      }}
    >
      <Toolbar sx={{ py: 0 }}>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <ScrollLink
            to="Home"
            smooth={true}
            duration={600}
            className={`cursor-pointer text-[#007fff] hover:text-[#0c46bc] font-extrabold text-3xl ${
              darkMode ? "text-white" : "text-blue-950"
            }`}
            style={{ fontFamily: "whisper" }}
          >
            Soham Banik
          </ScrollLink>
        </Typography>

        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="#1e40af"
            aria-label="menu"
            onClick={handleToggleMenu}
          >
            <FiMenu />
          </IconButton>
        ) : (
          <nav className="flex gap-4">
            {navLinks.map(({ to, label }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={600}
                className={`cursor-pointer ${
                  darkMode ? "text-[#ADD8E6]" : "text-blue-950"
                } hover:text-[#0c46bc]`}
              >
                {label}
              </ScrollLink>
            ))}
            <a
              href={`https://drive.google.com/file/d/1mTj_3q0z9IjqaJCQNNJAFlnGvuibsPjE/view?usp=drivesdk`}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer ${
                darkMode ? "text-white" : "text-[#0c46bc]"
              } hover:text-[#007fff]`}
            >
              Resume
            </a>
          </nav>
        )}
      </Toolbar>
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="flex flex-col gap-4 items-center my-1">
            {navLinks.map(({ to, label }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={500}
                className={`cursor-pointer ${
                  darkMode ? "text-white" : "text-[#007fff]"
                } hover:text-[#0c46bc]`}
                onClick={handleToggleMenu}
              >
                {label}
              </ScrollLink>
            ))}
            <Button
              href={`https://drive.google.com/file/d/1mTj_3q0z9IjqaJCQNNJAFlnGvuibsPjE/view?usp=drivesdk`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              style={{
                color: darkMode ? "white" : "#007fff",
                borderColor: darkMode ? "white" : "#007fff",
              }}
              onClick={handleToggleMenu}
            >
              Resume
            </Button>
          </nav>
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
