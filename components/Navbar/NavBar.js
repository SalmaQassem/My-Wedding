import classes from "../../styles/NavBar/_navBar.module.scss";
import StyledContainer from "../UI/StyledContainer";
import Link from "next/link";
import MainButton from "../UI/MainButton";

const NavBar = () => {
  return (
    <StyledContainer>
      <nav className={classes.nav}>
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
      </nav>
    </StyledContainer>
  );
};

export default NavBar;
