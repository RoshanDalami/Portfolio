import classes from "./AboutSelf.module.css";
import SelfImage from "../assets/bamya2ndLot.jpg";
import { motion } from "framer-motion";
const AboutSelf = () => {
  const Info = [
    {
      image: SelfImage,
      id: 1,
    },
  ];
  return (
    <>
      <motion.div className={classes.text} initial={{x:'100vh'}} animate={{x:0}} transition={{type:'spring',stiffness:120}}>
        <h1>What About Me ?!</h1>
        <hr className={classes.horLine} />
      </motion.div>
      <div className={classes.wrapper}>
        {Info.map((info) => {
          return (
            <div className={classes.languageContainer} key={info.id}>
              <img src={info.image} alt="" className={classes.items} />
            </div>
          );
        })}
      </div>
      <div className={classes.introText}>
        <h1 className={classes.nameText}>
          <i>{"ROSHAN DALAMI"}</i>
        </h1>
        <p className={classes.infoText}>
        Tech Enthusiast. Just Completed B.E Computer Science and Engineering. Passionate Web Developer. Currently exploring different technologies. Learning How to built world a better place with Code 
        </p>
      </div>
    </>
  );
};

export default AboutSelf;
