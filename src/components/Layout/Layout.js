import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";

const Layout = (props) => (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
