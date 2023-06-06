import { NavLink } from "react-router-dom";
import classes from './MainNavBar.module.css';
import Curves from "./Curves";
const MainNavBar = () => {
  return (
    <>
    
      <div className={classes.wrapper}>
        <nav>
          <ul className={classes.itemWrapper}>
            <NavLink to={"/"} className={classes.item}>
              Home
            </NavLink>
            <NavLink to={"/about"} className={classes.item}>
              About
            </NavLink>
            <NavLink to={"/projects"} className={classes.item}>
              Projects
            </NavLink>
            <NavLink to={"/contact"} className={classes.item}>
              Contact
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainNavBar;
