import Typed from "typed.js";
import React from "react";
import classes from "./HomePage.module.css";
import mainImage from '../assets/mainImage.svg'
const HomePage = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={classes.container}>
    <section className={classes.textContainer}>
    <div className={classes.textArea}>
    <h4 style={{color:'white',fontSize:30}}>Hello !</h4>
    <h1 style={{ color: "white" }}>
        <span style={{fontSize:150}}>I</span> 'm <span style={{ color: "#FFE7A0" }}>Roshan</span>{" "}
        <span className={classes.hand}>🖐️</span>
      </h1>
      <span ref={el} className={classes.text} />
    </div>
    
    </section>
    <section className={classes.imageSection}>
        <img src={mainImage} alt="" className={classes.mainImage}/>
    </section>
     
    </div>
  );
};

export default HomePage;
