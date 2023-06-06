import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { FaFacebook ,FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";
import Curves from "./Curves";

function Footer() {
  return (
    <>
    <div className={classes.mainContainer}>
    <Curves className={classes.curve}/>
      </div>
    <div className={classes.container}>
      <div className={classes.text}>
        <p>&copy; Roshan Dalami &nbsp; 2023</p>
      </div>
      <div className={classes.socialLink}>
        <Link to={'https://www.facebook.com/roshan.sunar.752'} target={'_blank'} className={classes.iconWrapper} >{<FaFacebook className={classes.icons}/>}</Link>
        <Link to={'https://www.instagram.com/ro_shan_s__/'} target={'_blank'} className={classes.iconWrapper}><FaInstagram className={classes.icons}/></Link>
        <Link to={'https://github.com/RoshanDalami'} target={'_blank'}  className={classes.iconWrapper} ><FaGithub className={classes.icons} /></Link>
        <Link to={'https://www.linkedin.com/in/roshan-dalami-981635200/'} target={'_blank'}  className={classes.iconWrapper} ><FaLinkedin className={classes.icons} /></Link>
    </div>
    </div>
    </>
  );
}

export default Footer;
