import classes from "../../styles/NavBar/_navBar.module.scss";
import StyledContainer from "../UI/StyledContainer";
import Link from "next/link";
import MainButton from "../UI/MainButton";
import { useEffect, useState, useCallback } from "react";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = useCallback(() => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={isScroll ? `${classes.nav} ${classes.scroll}` : classes.nav}
    >
      <StyledContainer>
        <div className={classes.navContent}>
          <div className={classes.logo}>
            <Link href="/">Marian</Link>
          </div>
          <div className={classes.links}>
            <ul>
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/">about</Link>
              </li>
              <li>
                <Link href="/">service</Link>
              </li>
              <li>
                <Link href="/">blog</Link>
              </li>
              <li>
                <Link href="/">contact</Link>
              </li>
            </ul>
          </div>
          <div className={classes.button}>
            <MainButton>book online</MainButton>
          </div>
        </div>
      </StyledContainer>
    </nav>
  );
};

export default NavBar;
