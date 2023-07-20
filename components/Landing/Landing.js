import classes from "../../styles/LandingPage/_landing.module.scss";
import Overlay from "../UI/Overlay";

const Landing = () => {
  return (
    <section className={classes.landing}>
      <Overlay />
      <div className={classes.text}>
        <h1>top wedding halls in the city</h1>
        <p>wedding halls</p>
      </div>
    </section>
  );
};

export default Landing;
