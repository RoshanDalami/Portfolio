import classes from "./Language.module.css";
import Nodejs from "../assets/nodejs-icon.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import JAVASCRIPT from "../assets/javascript.svg";
import PYTHON from "../assets/python.svg";
import REACT from "../assets/react.svg";
import FIREBASE from "../assets/firebase.svg";
import { Tooltip } from "@mui/material";
const Language = () => {
  const LanguageIcons = [
    {
      image: Nodejs,
      title: "NodeJS",
    },
    {
      image: HTML,
      title: "HTML 5",
    },
    {
      image: CSS,
      title: "CSS 3",
    },
    {
      image: JAVASCRIPT,
      title: " JAVASCRIPT",
    },
    {
      image: PYTHON,
      title: "PYTHON",
    },
    {
      image: REACT,
      title: "REACT",
    },
    {
      image: FIREBASE,
      title: "FIREBASE",
    },
  ];
  return (
    <>
   <div className={classes.text}>
          <h1>
            Programming Languages
          </h1>
          <hr className={classes.horLine}/>
        </div>
      <div className={classes.wrapper}>
        {LanguageIcons.map((icon) => {
          return (
            
              <div className={classes.languageContainer}>
                <Tooltip arrow={true} title={icon.title} className={classes.tooltip}>
                  <img src={icon.image} alt="" className={classes.items} />
                </Tooltip>
              </div>
            
          );
        })}
      </div>
    </>
  );
};

export default Language;
