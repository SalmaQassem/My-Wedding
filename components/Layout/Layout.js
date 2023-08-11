import NavBar from "../Navbar/NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default Layout;
